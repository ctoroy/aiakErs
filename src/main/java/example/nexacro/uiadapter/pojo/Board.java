package example.nexacro.uiadapter.pojo;

import java.util.Date;

/**
 * <pre>
 * @title   
 * @desc    아래의 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        
 * @package example.nexacro.uiadapter.pojo
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
public class Board extends NexacroBase {
	
	/** 검색조건 */
    private String searchCondition = "";

    /** 검색Keyword */
    private String searchKeyword = "";

    /** 검색사용여부 */
    private String searchUseYn = "";
    
    // Fields
    private String  title;
    private String  regId;
    private String  postId;
    private String  contents;
    private String  communityId;
    private String  hitCount;
    private Date    regDate;
    private boolean isNotice;
    
    
    /**
     * @return the searchCondition
     */
    public String getSearchCondition() {
        return searchCondition;
    }

    /**
     * @param searchCondition
     *            the searchCondition to set
     */
    public void setSearchCondition(String searchCondition) {
        this.searchCondition = searchCondition;
    }

    /**
     * @return the searchKeyword
     */
    public String getSearchKeyword() {
        return searchKeyword;
    }

    /**
     * @param searchKeyword
     *            the searchKeyword to set
     */
    public void setSearchKeyword(String searchKeyword) {
        this.searchKeyword = searchKeyword;
    }

    /**
     * @return the searchUseYn
     */
    public String getSearchUseYn() {
        return searchUseYn;
    }

    /**
     * @param searchUseYn
     *            the searchUseYn to set
     */
    public void setSearchUseYn(String searchUseYn) {
        this.searchUseYn = searchUseYn;
    }

    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title
     *            the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return the regId
     */
    public String getRegId() {
        return regId;
    }

    /**
     * @param regId
     *            the regId to set
     */
    public void setRegId(String regId) {
        this.regId = regId;
    }

    /**
     * @return the postId
     */
    public String getPostId() {
        return postId;
    }

    /**
     * @param postId
     *            the postId to set
     */
    public void setPostId(String postId) {
        this.postId = postId;
    }

    /**
     * @return the contents
     */
    public String getContents() {
        return contents;
    }

    /**
     * @param contents
     *            the contents to set
     */
    public void setContents(String contents) {
        this.contents = contents;
    }

    /**
     * @return the communityId
     */
    public String getCommunityId() {
        return communityId;
    }

    /**
     * @param communityId
     *            the communityId to set
     */
    public void setCommunityId(String communityId) {
        this.communityId = communityId;
    }

    /**
     * @return the hitCount
     */
    public String getHitCount() {
        return hitCount;
    }

    /**
     * @param hitCount
     *            the hitCount to set
     */
    public void setHitCount(String hitCount) {
        this.hitCount = hitCount;
    }

    /**
     * @return the regDate
     */
    public Date getRegDate() {
        return regDate;
    }

    /**
     * @param regDate
     */
    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }

    public void setIsNotice(boolean value) {
    	this.isNotice = value;
    }
    
    public boolean getIsNotice() {
    	return this.isNotice;
    }
}
