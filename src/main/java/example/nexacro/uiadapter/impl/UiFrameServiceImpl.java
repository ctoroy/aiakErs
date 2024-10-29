package example.nexacro.uiadapter.impl;

import com.nexacro.java.xapi.data.DataSet;
import example.nexacro.uiadapter.mapper.UiFrameMapper;
import example.nexacro.uiadapter.pojo.CmmBtn;
import example.nexacro.uiadapter.pojo.ComCode;
import example.nexacro.uiadapter.pojo.ComMenu;
import example.nexacro.uiadapter.service.UiFrameService;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Test를 위한 ServiceImpl Sample Class
 *
 * @author Song WonChang
 * @since 10.18.2024
 * @version 1.0
 * @see
 */
@Repository
public class UiFrameServiceImpl implements UiFrameService {

    @Autowired
    private SqlSessionTemplate sqlSession;
    
    @Override
    public List<ComMenu> selectMenuList() {
    	UiFrameMapper mapper = sqlSession.getMapper(UiFrameMapper.class);
        return mapper.selectMenuList();
    }

    @Override
    public void saveMenuList(List<ComMenu> comMenus) {
        UiFrameMapper mapper = sqlSession.getMapper(UiFrameMapper.class);

        comMenus.forEach(comMenu -> {
            switch (comMenu.getRowType()) {
                case DataSet.ROW_TYPE_INSERTED:
                    comMenu.setUsyn("Y");
                    comMenu.setCrtrId("skyteam");
                    comMenu.setMdpsId("skyteam");
                    mapper.insertMenuList(comMenu);
                    break;
                case DataSet.ROW_TYPE_UPDATED:
                    comMenu.setMdpsId("skyteam");
                    mapper.updateMenuList(comMenu);
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    mapper.deleteMenuList(comMenu);
                    break;
                default:
            }
        });
    }

    @Override
    public List<CmmBtn> selectCmmBtnList(CmmBtn cmmBtn) {
        UiFrameMapper mapper = sqlSession.getMapper(UiFrameMapper.class);
        return mapper.selectCmmBtnList(cmmBtn);
    }

    @Override
    public void saveCmmBtnList(List<CmmBtn> cmmBtns) {
        UiFrameMapper mapper = sqlSession.getMapper(UiFrameMapper.class);

        cmmBtns.forEach(cmmBtn -> {
            switch (cmmBtn.getRowType()) {
                case DataSet.ROW_TYPE_INSERTED:
                    cmmBtn.setCrtrId("skyteam");
                    cmmBtn.setMdpsId("skyteam");
                    mapper.insertCmmBtnList(cmmBtn);
                    break;
                case DataSet.ROW_TYPE_UPDATED:
                    cmmBtn.setMdpsId("skyteam");
                    mapper.updateCmmBtnList(cmmBtn);
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    mapper.deleteCmmBtnList(cmmBtn);
                    break;
                default:
            }
        });
    }

    @Override
    public List<ComCode> selectComCodeList(ComCode comCode) {
        UiFrameMapper mapper = sqlSession.getMapper(UiFrameMapper.class);
        return mapper.selectComCodeList(comCode);
    }

    @Override
    public List<ComCode> selectComCodeDetailList(ComCode comCode) {
        UiFrameMapper mapper = sqlSession.getMapper(UiFrameMapper.class);
        return mapper.selectComCodeDetailList(comCode);
    }

    @Override
    public void saveComCodeList(List<ComCode> codeList, List<ComCode> codeDetailList) {
        UiFrameMapper mapper = sqlSession.getMapper(UiFrameMapper.class);

        codeList.forEach(comCode -> {
            switch (comCode.getRowType()) {
                case DataSet.ROW_TYPE_INSERTED:
                    comCode.setCmnCd(comCode.getGrpCd());
                    comCode.setCrtrId("skyteam");
                    comCode.setMdpsId("skyteam");
                    mapper.insertComCodeList(comCode);
                    break;
                case DataSet.ROW_TYPE_UPDATED:
                    comCode.setMdpsId("skyteam");
                    mapper.updateComCodeList(comCode);
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    mapper.deleteComCodeList(comCode);
                    break;
                default:
            }
        });

        codeDetailList.forEach(comCode -> {
            switch (comCode.getRowType()) {
                case DataSet.ROW_TYPE_INSERTED:
                    comCode.setCrtrId("skyteam");
                    comCode.setMdpsId("skyteam");
                    mapper.insertComCodeList(comCode);
                    break;
                case DataSet.ROW_TYPE_UPDATED:
                    comCode.setMdpsId("skyteam");
                    mapper.updateComCodeList(comCode);
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    mapper.deleteComCodeList(comCode);
                    break;
                default:
            }
        });
    }
}
