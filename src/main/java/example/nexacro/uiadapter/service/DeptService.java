package example.nexacro.uiadapter.service;

import java.util.List;
import java.util.Map;

import example.nexacro.uiadapter.pojo.Dept;

/**
 * <pre>
 * @title   
 * @desc    아래의 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        
 * @package example.nexacro.uiadapter.service
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
public interface DeptService {

    List<Dept>           select_datalist(Dept Dept);
    List<Map<String,Object>> select_datalist_map(Map<String,String> search);
    void save_datalist(List<Dept> dataList);
    void save_datalist_map(List<Map<String,Object>> dataList);
}