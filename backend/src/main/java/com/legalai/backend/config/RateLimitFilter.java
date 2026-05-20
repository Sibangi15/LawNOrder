package com.legalai.backend.config;

import io.github.bucket4j.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.Duration;

@Component
public class RateLimitFilter implements Filter {

    private final Bucket bucket;

    public RateLimitFilter() {

        Bandwidth limit = Bandwidth.classic(
                10,
                Refill.greedy(
                        10,
                        Duration.ofMinutes(1)
                )
        );

        this.bucket = Bucket.builder()
                .addLimit(limit)
                .build();
    }

    @Override
    public void doFilter(
            ServletRequest request,
            ServletResponse response,
            FilterChain chain
    ) throws IOException, ServletException {

        HttpServletResponse httpResponse =
                (HttpServletResponse) response;

        if (bucket.tryConsume(1)) {

            chain.doFilter(request, response);

        } else {

            httpResponse.setStatus(429);

            httpResponse.getWriter().write(
                    "Too many requests"
            );
        }
    }
}