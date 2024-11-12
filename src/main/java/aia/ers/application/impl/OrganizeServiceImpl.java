package aia.ers.application.impl;

import aia.ers.application.mapper.OrganizeMapper;
import aia.ers.application.pojo.Emp;
import aia.ers.application.pojo.departDto;
import aia.ers.application.pojo.employeeDto;
import aia.ers.application.service.OrganizeService;
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

    /**
     *
     * @desc 사원목록 조회
     * @param List<Emp> empList
     * @return
     */
    @Override
    public List<Emp> selectEmpList(Emp Params){
        OrganizeMapper mapper = sqlSession.getMapper(OrganizeMapper.class);
        return mapper.selectEmpList(Params);
    }
}
