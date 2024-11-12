(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameBottom");
            this.set_titletext("frameBottom");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,23);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staInfo","30","0","680","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_BF_Info");
            obj.set_text("N/A");
            this.addChild(obj.name, obj);

            obj = new Static("staDate",null,"0","80","23","29",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("2024-10-07");
            obj.set_cssclass("sta_BF_Date");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staUserInfo",null,"0","250","23","staDate:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("<fc v=\'#000000\'>홍길동</fc>님 오늘도 희망찬 하루 되세요! ");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_BF_User");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,23,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameBottom.xfdl", function() {

        /**
        *  AIA 비용관리시스템 시스템
        *  @FileName 	sampleScript.xfdl
        *  @Creator 	AIA
        *  @CreateDate 	2024.10.21
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024.10.21			AIA						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();	//필수 application
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fnInit();
        };

        /**
         * @description 화면 load시 초기화
         */
        this.fnInit = function()
        {
        	this.staDate.text = this.gfnGetDate("", "-");
        	this.resetScroll();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnInit : 초기화 / cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnClose : 화면 닫기전 체크)
         * 추가 버튼은 prefix cfn 으로 시작하여 명칭을 만든다.
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 상태 메시지
         */
        this.fnStatusMsg = function(v)
        {
        	this.staInfo.text = v;
        };

        /**
         * @description 사용자 정보
         */
        this.fnUserInfro = function(v)
        {
        	this.staUserInfo.text = v;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("frameBottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
