package example.nexacro.uiadapter.mapper;

import example.nexacro.uiadapter.pojo.CmmBtnList;
import example.nexacro.uiadapter.pojo.ComCode;
import example.nexacro.uiadapter.pojo.MenuList;

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
public interface MenuListMapper {

	public List<MenuList> selectMenuList();
	public void insertMenuList(MenuList menuList);
	public void updateMenuList(MenuList menuList);
	public void deleteMenuList(MenuList menuList);

	public List<CmmBtnList> selectCmmBtnList(CmmBtnList cmmBtnList);
	public void insertCmmBtnList(CmmBtnList cmmBtnList);
	public void updateCmmBtnList(CmmBtnList cmmBtnList);
	public void deleteCmmBtnList(CmmBtnList cmmBtnList);

	public List<ComCode> selectComCodeList(ComCode comCode);
	public void insertComCodeList(ComCode comCode);
	public void updateComCodeList(ComCode comCode);
	public void deleteComCodeList(ComCode comCode);

}
