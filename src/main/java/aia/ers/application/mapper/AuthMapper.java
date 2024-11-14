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
 * @author  강성호
 * @since   2024. 11. 06.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜						변경자		내용
 * ------------------------------------------------
 * 2024. 11. 06.	강성호		최초작성
 */
public interface AuthMapper {
    public List<Auth> selectAuthCodeList(Auth params);
    public int selectAuthCodeChk(Auth params);
    public void insertAuthCodeList(Auth authCode);
    public void updateAuthCodeList(Auth authCode);
    public void deleteAuthCodeList(Auth authCode);
    public List<Auth> selectAuthMenuList(Auth params);
    public void insertAuthPrgmMngmList(Auth authPrgmMngm);
    public void deleteAuthPrgmMngmList(Auth authPrgmMngm);
    public Auth selectAuthUsrMngm(Auth params);
    public List<Auth> selectAuthUsrMngmGrpList(Auth params);
    public List<Auth> selectAuthUsrMngmDeptList(Auth params);
    public void insertAuthUsrMngmList(Auth authPrgmMngm);
    public void updateAuthUsrMngmList(Auth authPrgmMngm);
    public void deleteAuthUsrMngmList(Auth authPrgmMngm);
    public List<Auth> selectUsrExcptAuthList(Auth params);
    public List<Auth> selectUsrExcptAuthMenuList(Auth params);
    public void insertUsrExcptAuthList(Auth authPrgmMngm);
    public void deleteUsrExcptAuthList(Auth authPrgmMngm);
}