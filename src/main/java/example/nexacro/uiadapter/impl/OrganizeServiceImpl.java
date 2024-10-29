package example.nexacro.uiadapter.impl;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.boot.core.data.DataSetRowTypeAccessor;
import example.nexacro.uiadapter.mapper.BoardMapper;
import example.nexacro.uiadapter.mapper.OrganizeMapper;
import example.nexacro.uiadapter.pojo.Board;
import example.nexacro.uiadapter.pojo.departDto;
import example.nexacro.uiadapter.pojo.employeeDto;
import example.nexacro.uiadapter.service.BoardService;
import example.nexacro.uiadapter.service.OrganizeService;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Test를 위한 ServiceImpl Sample Class
 *
 * @author Park SeongMin
 * @since 08.12.2015
 * @version 1.0
 * @see
 */
@Repository
public class OrganizeServiceImpl implements OrganizeService {

    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<departDto> select_depart() {
        OrganizeMapper mapper = sqlSession.getMapper(OrganizeMapper.class);
        return mapper.select_depart();
    }

    @Override
    public List<employeeDto> select_employee() {
        OrganizeMapper mapper = sqlSession.getMapper(OrganizeMapper.class);
        return mapper.select_employee();
    }
}
