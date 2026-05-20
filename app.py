from fastapi import FastAPI
from pydantic import BaseModel

from transformers import (
    DistilBertTokenizerFast,
    DistilBertForSequenceClassification
)

import torch
import joblib
import numpy as np

# -----------------------------
# LOAD MODEL
# -----------------------------

MODEL_PATH = "./legal_model"

tokenizer = DistilBertTokenizerFast.from_pretrained(
    MODEL_PATH
)

model = DistilBertForSequenceClassification.from_pretrained(
    MODEL_PATH,
    low_cpu_mem_usage=True
)

encoder = joblib.load(
    "label_encoder.pkl"
)


encoder.classes_ = np.array(
    encoder.classes_
)

model.eval()

# -----------------------------
# FASTAPI APP
# -----------------------------

app = FastAPI()

# -----------------------------
# REQUEST SCHEMA
# -----------------------------

class ComplaintRequest(BaseModel):
    text: str


# -----------------------------
# ROOT ROUTE
# -----------------------------

@app.get("/")
def home():

    return {
        "message": "Legal Complaint AI API Running"
    }


# -----------------------------
# PREDICTION ROUTE
# -----------------------------

@app.post("/predict")
def predict(data: ComplaintRequest):

    inputs = tokenizer(
        data.text,
        return_tensors="pt",
        truncation=True,
        padding=True,
        max_length=128
    )

    with torch.no_grad():
        outputs = model(**inputs)

    logits = outputs.logits

    predicted_class_id = torch.argmax(logits, dim=1).item()

    confidence = torch.softmax(logits, dim=1)[0][predicted_class_id].item()

    predicted_label = encoder.inverse_transform(
        [predicted_class_id]
    )[0]

    return {
        "prediction": predicted_label,
        "confidence": round(confidence * 100, 2)
    }