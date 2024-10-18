package example.nexacro.uiadapter.impl;

import example.nexacro.uiadapter.mapper.MenuListMapper;
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

}
