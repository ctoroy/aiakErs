package example.nexacro.uiadapter.impl;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.boot.core.data.DataSetRowTypeAccessor;
import example.nexacro.uiadapter.mapper.MenuListMapper;
import example.nexacro.uiadapter.pojo.CmmBtnList;
import example.nexacro.uiadapter.pojo.MenuList;
import example.nexacro.uiadapter.service.UiFrameService;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Test를 위한 ServiceImpl Sample Class
 *
 * @author Park SeongMin
 * @since 08.12.2015
 * @version 1.0
 * @see
 */
@Repository
public class UiFrameServiceImpl implements UiFrameService {

    @Autowired
    private SqlSessionTemplate sqlSession;
    
    @Override
    public List<MenuList> selectMenuList() {
    	MenuListMapper mapper = sqlSession.getMapper(MenuListMapper.class);
        return mapper.selectMenuList();
    }

    public void saveMenuList(List<MenuList> menuLists) {
        MenuListMapper mapper = sqlSession.getMapper(MenuListMapper.class);

        int size = menuLists.size();
        for (int i=0; i<size; i++) {
            MenuList menuList = menuLists.get(i);
            if (menuList instanceof DataSetRowTypeAccessor) {
                DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) menuList;

                if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED) {
                    menuList.setUsyn("Y");
                    menuList.setCrtrId("skyteam");
                    menuList.setMdpsId("skyteam");
                    mapper.insertMenuList(menuList);
                } else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
                    menuList.setMdpsId("skyteam");
                    mapper.updateMenuList(menuList);
                } else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED) {
                    mapper.deleteMenuList(menuList);
                }
            }
        }
    }

    @Override
    public List<CmmBtnList> selectCmmBtnList(CmmBtnList cmmBtnList) {
        MenuListMapper mapper = sqlSession.getMapper(MenuListMapper.class);
        return mapper.selectCmmBtnList(cmmBtnList);
    }

    public void saveCmmBtnList(List<CmmBtnList> cmmBtnLists) {
        MenuListMapper mapper = sqlSession.getMapper(MenuListMapper.class);

        int size = cmmBtnLists.size();
        for (int i=0; i<size; i++) {
            CmmBtnList cmmBtnList = cmmBtnLists.get(i);
            if (cmmBtnList instanceof DataSetRowTypeAccessor) {
                DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) cmmBtnList;

                if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED) {
                    //cmmBtnList.setUsyn("Y");
                    cmmBtnList.setCrtrId("skyteam");
                    cmmBtnList.setMdpsId("skyteam");
                    mapper.insertCmmBtnList(cmmBtnList);
                } else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
                    cmmBtnList.setMdpsId("skyteam");
                    mapper.updateCmmBtnList(cmmBtnList);
                } else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED) {
                    mapper.deleteCmmBtnList(cmmBtnList);
                }
            }
        }
    }
}
