package aia.ers.application.impl;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nexacro.uiadapter.boot.core.data.DataSetRowTypeAccessor;
import com.nexacro.java.xapi.data.DataSet;

import aia.ers.application.mapper.BoardMapper;
import aia.ers.application.pojo.Board;
import aia.ers.application.service.BoardService;

/**
 * Test를 위한 ServiceImpl Sample Class
 *
 * @author Park SeongMin
 * @since 08.12.2015
 * @version 1.0
 * @see
 */
@Repository
public class BoardServiceImpl implements BoardService {

    @Autowired
    private SqlSessionTemplate sqlSession;
    
    @Override
    public List<Board> select_datalist(Board searchVO) {
    	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
        return mapper.select_datalist(searchVO);
    }
    
	@Override
	public List<Map<String,Object>> select_datalist_map(Map<String,String> search) {
		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
	    return mapper.select_datalist_map(search);
	}
    
    @Override
    public void save_datalist(List<Board> dataList) {
    	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
    	
        int size = dataList.size();
        for (int i=0; i<size; i++) {
            Board board = dataList.get(i);
            if (board instanceof DataSetRowTypeAccessor){
                DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) board;
                
                if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
                	mapper.insert_board(board);
                }else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
                	mapper.save_board(board);
                }else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
                	mapper.delete_board(board);
                }
            }
        }
    }
    
    @Override
    public void save_datalist_map(List<Map<String,Object>> dataList) {
    	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
    	
        int size = dataList.size();
        for (int i=0; i<size; i++) {
            Map<String,Object> board = dataList.get(i);
            
            int rowType = Integer.parseInt(String.valueOf(board.get(DataSetRowTypeAccessor.NAME)));
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	mapper.insert_board_map(board);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	mapper.save_board_map(board);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	mapper.delete_board_map(board);
            }
        }
    }
}
