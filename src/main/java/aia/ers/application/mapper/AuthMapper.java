package aia.ers.application.mapper;

import aia.ers.application.pojo.Auth;

import java.util.List;

/**
 * <pre>
 * @title   권한
 * @desc
 * @package com.nexacro.sample.uiadapter.spring.mapper
 * <pre>
 * 
 * @author  강성
 * @since   2024. 11. 06.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜						변경자		내용
 * ------------------------------------------------
 * 2024. 11. 06.	강성호		최초작성
 */
public interface AuthMapper {
    public List<Auth> selectAuthCodeList(Auth auth);
    public int selectAuthCodeChk(Auth auth);
    public void insertAuthCodeList(Auth user);
    public void updateAuthCodeList(Auth user);
    public void deleteAuthCodeList(Auth user);
}