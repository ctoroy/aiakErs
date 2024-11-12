package aia.ers.application.mapper;

import aia.ers.application.pojo.Artc;
import aia.ers.application.pojo.Emp;
import aia.ers.application.pojo.departDto;
import aia.ers.application.pojo.employeeDto;

import java.util.List;

/**
 * <pre>
 * @title   
 * @desc    아래의 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        
 * @package com.nexacro.sample.uiadapter.spring.mapper
 * <pre>
 * 
 * @author  TOBESOFT
 * @since   2017. 11. 20.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 20.		TOBESOFT	최초작성
 */
public interface OrganizeMapper {
	public List<departDto>           select_depart();
    public List<employeeDto>           select_employee();
    public List<Emp> selectEmpList(Emp params);
    public List<Artc> selectArtcList(Artc params);
}
