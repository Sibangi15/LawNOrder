package com.legalai.backend.util;

import java.util.UUID;

public class UserIdGenerator {

    public static String generateAnonymousId() {

        return "USR_" + UUID.randomUUID()
                .toString()
                .substring(0, 6)
                .toUpperCase();
    }
}