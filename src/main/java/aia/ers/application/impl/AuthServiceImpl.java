package aia.ers.application.impl;

import aia.ers.application.mapper.AuthMapper;
import aia.ers.application.pojo.Auth;
import aia.ers.application.service.AuthService;
import com.nexacro.java.xapi.data.DataSet;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;

/**
 * <pre>
 * @title   권한
 * @desc
 * @package aia.ers.application.serviceImpl
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
@Repository
public class AuthServiceImpl implements AuthService {

    @Autowired
    private SqlSessionTemplate sqlSession;

    /**
     *
     * @desc 권한코드 리스트 데이터 조회 - VO
     * @param Auth params
     * @return List<Auth>
     */
    @Override
    public List<Auth> selectAuthCodeList(Auth params) {
    	AuthMapper mapper = sqlSession.getMapper(AuthMapper.class);
        return mapper.selectAuthCodeList(params);
    }

    /**
     *
     * @desc 권한코드 리스트 데이터 입력,수정,삭제
     * @param List<Auth> authList
     * @return
     */
    @Override
    public void saveAuthCodeList(List<Auth> authCodeList){
        AuthMapper mapper = sqlSession.getMapper(AuthMapper.class);
        authCodeList.forEach(authCode -> {
            switch (authCode.getRowType()) {
                case DataSet.ROW_TYPE_INSERTED:
                    int authCodeCnt = mapper.selectAuthCodeChk(authCode);
                    if( authCodeCnt == 0 ){
                        authCode.setCretrId("ksh");
                        authCode.setMdfrId("ksh");
                        mapper.insertAuthCodeList(authCode);
                    } else {

                    }
                    break;
                case DataSet.ROW_TYPE_UPDATED:
                    authCode.setMdfrId("ksh");
                    mapper.updateAuthCodeList(authCode);
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    mapper.deleteAuthCodeList(authCode);
                    break;
                default:
            }
        });
    }

    /**
     *
     * @desc 권한그룹별메뉴조회
     * @param Auth params
     * @return List<Auth>
     */
    @Override
    public List<Auth> selectAuthMenuList(Auth params) {
        AuthMapper mapper = sqlSession.getMapper(AuthMapper.class);
        return mapper.selectAuthMenuList(params);
    }

    /**
     *
     * @desc 권한별프로그램관리 입력,삭제
     * @param List<Auth> authMenuList
     * @return
     */
    @Override
    public void saveAuthMenuList(List<Auth> authMenuList){
        AuthMapper mapper = sqlSession.getMapper(AuthMapper.class);
        authMenuList.forEach(authPrgmMngm -> {
            switch (authPrgmMngm.getRowType()) {
                case DataSet.ROW_TYPE_UPDATED:
                    String authUseYn = authPrgmMngm.getAuthUseYn();
                    if( "Y".equals(authUseYn) ){
                        authPrgmMngm.setCretrId("ksh");
                        authPrgmMngm.setMdfrId("ksh");
                        mapper.insertAuthPrgmMngmList(authPrgmMngm);
                    } else {
                        mapper.deleteAuthPrgmMngmList(authPrgmMngm);
                    }
                    break;
                default:
            }
        });
    }

    /**
     *
     * @desc 권한별 사용자 조회
     * @param Auth params
     * @return Auth
     */
    @Override
    public Auth selectAuthUsrMngm(Auth params) {
        AuthMapper mapper = sqlSession.getMapper(AuthMapper.class);
        return mapper.selectAuthUsrMngm(params);
    }

    /**
     *
     * @desc 권한별 사용자목록 조회
     * @param Auth params
     * @return List<Auth>
     */
    @Override
    public List<Auth> selectAuthUsrMngmList(Auth params) {
        AuthMapper mapper = sqlSession.getMapper(AuthMapper.class);
        String strAuthClssfc = params.getAuthClssfc();
        // 권한타입이 권한인 경우
        if( "R".equals(strAuthClssfc) ){
            return mapper.selectAuthUsrMngmGrpList(params);
        // 권한타입이 부서인 경우
        }else{
            return mapper.selectAuthUsrMngmDeptList(params);
        }
    }

    /**
     *
     * @desc 권한별 사용자목록 입력,삭제
     * @param List<Auth> authUsrMngmList
     * @return
     */
    @Override
    public void saveAuthUsrMngmList(List<Auth> authUsrMngmList){
        AuthMapper mapper = sqlSession.getMapper(AuthMapper.class);
        authUsrMngmList.forEach(authUsrMngm -> {
            switch (authUsrMngm.getRowType()) {
                case DataSet.ROW_TYPE_INSERTED:
                    authUsrMngm.setCretrId("ksh");
                    authUsrMngm.setMdfrId("ksh");
                    mapper.insertAuthUsrMngmList(authUsrMngm);
                    break;
                case DataSet.ROW_TYPE_UPDATED:
                    Auth rtnAuthUsrMngm = mapper.selectAuthUsrMngm(authUsrMngm);
                    if(Objects.isNull(rtnAuthUsrMngm) ){
                        authUsrMngm.setCretrId("ksh");
                        authUsrMngm.setMdfrId("ksh");
                        mapper.insertAuthUsrMngmList(authUsrMngm);
                    } else {
                        authUsrMngm.setMdfrId("ksh");
                        mapper.updateAuthUsrMngmList(authUsrMngm);
                    }
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    mapper.deleteAuthUsrMngmList(authUsrMngm);
                    break;
                default:
            }
        });
    }

    /**
     *
     * @desc 사용자별(예외) 추가권한 조회
     * @param Auth params
     * @return List<Auth>
     */
    @Override
    public List<Auth> selectUsrExcptAuthList(Auth params) {
        AuthMapper mapper = sqlSession.getMapper(AuthMapper.class);
        return mapper.selectUsrExcptAuthList(params);
    }

    /**
     *
     * @desc 사용자별(예외) 추가권한 입력,삭제
     * @param List<Auth> authMenuList
     * @return
     */
    @Override
    public void saveUsrExcptAuthList(List<Auth> usrExcptAuthList){
        AuthMapper mapper = sqlSession.getMapper(AuthMapper.class);
        usrExcptAuthList.forEach(usrExcptAuth -> {
            switch (usrExcptAuth.getRowType()) {
                case DataSet.ROW_TYPE_UPDATED:
                    String excptAuthYn = usrExcptAuth.getExcptAuthYn();
                    if( "Y".equals(excptAuthYn) ){
                        usrExcptAuth.setCretrId("ksh");
                        usrExcptAuth.setMdfrId("ksh");
                        mapper.insertUsrExcptAuthList(usrExcptAuth);
                    } else {
                        mapper.deleteUsrExcptAuthList(usrExcptAuth);
                    }
                    break;
                default:
            }
        });
    }
}
