package aia.ers.application.impl;

import aia.ers.application.mapper.AuthMapper;
import aia.ers.application.pojo.Auth;
import aia.ers.application.service.AuthService;
import com.nexacro.java.xapi.data.DataSet;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

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

    @Override
    public List<Auth> selectAuthCodeList(Auth auth) {
    	AuthMapper mapper = sqlSession.getMapper(AuthMapper.class);
        return mapper.selectAuthCodeList(auth);
    }

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
}
