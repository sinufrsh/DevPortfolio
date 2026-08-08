package com.devportfolio.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtService {

	@Value("${jwt.secret}")
	private String secretKey;
	
	@Value("${jwt.expiration}")
	private Long jwtExpiration;
	
	
	public String generateToken(String email) {
		return Jwts
				   .builder()
				   .setSubject(email)
				   .setIssuedAt(new Date())
	                .setExpiration(new Date(System.currentTimeMillis()+jwtExpiration))
	                .signWith(SignatureAlgorithm.HS256, secretKey)
	                .compact();
	}
	
	public String extractEmail(String token){

        Claims claims = Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }
	
	public boolean isTokenValid(String token,String email){

	    return extractEmail(token).equals(email)
	            && !isTokenExpired(token);
	}
	
	private boolean isTokenExpired(String token){

	    Claims claims = Jwts.parser()
	            .setSigningKey(secretKey)
	            .parseClaimsJws(token)
	            .getBody();

	    return claims.getExpiration().before(new Date());
	}

}
