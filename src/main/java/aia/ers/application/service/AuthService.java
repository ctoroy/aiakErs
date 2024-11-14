package aia.ers.application.service;

import aia.ers.application.pojo.Auth;

import java.util.List;

/**
 * <pre>
 * @title   권한
 * @desc
 * @package aia.ers.application.service
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
public interface AuthService {

    /**
     *
     * @desc 권한코드 리스트 데이터 조회 - VO
     * @param Auth params
     * @return List<Auth>
     */
    List<Auth> selectAuthCodeList(Auth params);

    /**
     *
     * @desc 권한코드 리스트 데이터 입력,수정,삭제
     * @param List<Auth> authList
     * @return
     */
    void saveAuthCodeList(List<Auth> authCodeList);

    /**
     *
     * @desc 권한그룹별메뉴조회
     * @param Auth params
     * @return List<Auth>
     */
    List<Auth> selectAuthMenuList(Auth params);

    /**
     *
     * @desc 권한별프로그램관리 입력,삭제
     * @param List<Auth> authMenuList
     * @return
     */
    void saveAuthMenuList(List<Auth> authMenuList);

    /**
     *
     * @desc 권한별 사용자조회
     * @param Auth params
     * @return Auth
     */
    Auth selectAuthUsrMngm(Auth params);

    /**
     *
     * @desc 권한별 사용자목록조회
     * @param Auth params
     * @return List<Auth>
     */
    List<Auth> selectAuthUsrMngmList(Auth params);

    /**
     *
     * @desc 권한별 사용자 입력,삭제
     * @param List<Auth> authUsrMngmList
     * @return
     */
    void saveAuthUsrMngmList(List<Auth> authMenuList);

    /**
     *
     * @desc 사용자별(예외) 추가권한 조회
     * @param Auth params
     * @return List<Auth>
     */
    List<Auth> selectUsrExcptAuthList(Auth params);

    /**
     *
     * @desc 사용자별(예외) 추가권한 메뉴 조회
     * @param Auth params
     * @return List<Auth>
     */
    List<Auth> selectUsrExcptAuthMenuList(Auth params);

    /**
     *
     * @desc 사용자별(예외) 추가권한 입력,삭제
     * @param List<Auth> usrExcptAuthList
     * @return
     */
    void saveUsrExcptAuthList(List<Auth> usrExcptAuthList, List<Auth> usrExcptAuthMenuList);
}