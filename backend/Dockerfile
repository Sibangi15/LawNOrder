# Use Java 26
FROM eclipse-temurin:26-jdk

# Working directory
WORKDIR /app

# Copy Maven wrapper and pom files
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Give execute permission
RUN chmod +x mvnw

# Download dependencies
RUN ./mvnw dependency:go-offline

# Copy source code
COPY src src

# Build application
RUN ./mvnw clean package -DskipTests

# Expose Spring Boot port
EXPOSE 8080

# Run Spring Boot jar
CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]
