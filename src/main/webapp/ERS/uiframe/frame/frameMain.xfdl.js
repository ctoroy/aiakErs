(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMain");
            this.set_titletext("frameMain");
            this.set_background("lightgreen");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchKeyword\" type=\"STRING\" size=\"100\"/><Column id=\"searchCondition\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"searchKeyword\"/><Col id=\"searchCondition\">TITLE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","9","20","241","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("MAIN frame");
            obj.set_font("normal 800 36px/normal \"Malgun Gothic\"");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Div("divView","20","100",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnMainList","260","20","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메인 조회");
            obj.set_background("coral");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileUpList","390","20","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일다운 업 조회");
            obj.set_background("coral");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divView.form
            obj = new Layout("default","",0,0,this.divView.form,function(p){});
            this.divView.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameMain.xfdl", function() {
        /**
        *  AIA 비용관리시스템
        *  @FileName 	frameMain.xfdl
        *  @Creator 	마사회
        *  @CreateDate 	2020.11.25
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020.11.25			TOBESOFT					최초생성
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
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();
        };

        //화면 load시 초기화
        this.fnInit = function()
        {
        };

        //공통코드콤보설정(Combo/Grid)
        this.afterCommCodeLoad = function()
        {
        };

        //공통코드콤보설정 서버조회방식
        this.fnAfterCommCodeLoad = function()
        {
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnSave : 저장 / cfnDel : 삭제 / cfnExecl : 엑셀.. / cfnPrint : 인쇄 / cfnHep : 도움말  / cfnClose : 화면 닫기전 체크)
         * 추가 버튼은 prefix cfn 으로 시작하여 명칭을 만든다.
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function(obj, e)
        {
        	this.fnMenuList();
        	//TODO..
        };

        //추가
        this.cfnAdd = function(obj, e)
        {
        	this.gfnAlert("msg.general", [obj.text + " 버튼입니다."]);
        	//TODO..
        };

        //저장
        this.cfnSave = function(obj, e)
        {
        	this.gfnAlert("msg.general", [obj.text + " 버튼입니다."]);
        	//TODO..
        };

        //삭제
        this.cfnDel = function(obj, e)
        {
        	this.gfnAlert("msg.general", [obj.text + " 버튼입니다."]);
        	//TODO..
        };

        //엑셀
        this.cfnExcel = function(obj, e)
        {
        	this.gfnAlert("msg.general", [obj.text + " 버튼입니다."]);
        	//TODO..
        };

        //프린트
        this.cfnPrint = function(obj, e)
        {
        	this.gfnAlert("msg.general", [obj.text + " 버튼입니다."]);
        	//TODO..
        };

        //도움말
        this.cfnHelp = function(obj, e)
        {
        	this.gfnAlert("msg.general", [obj.text + " 버튼입니다."]);
        	//TODO..
        };

        //화면 닫기전 체크
        this.cfnClose = function()
        {
        	trace("업무화면에 수정 사항이 있으면  cfnClose 메소드를 추가 하세요.");
        	//return false;	//수정사항이 있을경우;
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnMenuList = function ()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "selectMenuList.do"; // "retrieve_datalist.do";
        	var inData      = "";
        	var outData     = "dsList=MENULIST";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (svcId, nErrCd, sErrMsg)
        {
        	switch(svcId)
        	{
        		case "search":
        			this.grdList.createFormat();
        			break;

        		case "save":
        			// 저장 되었습니다.
        			this.gfnAlert("msg.save.success");
        			break;
        		default:break;
        	}
        };

        //excel import callback
        this.fnExcelImportCallback = function (sImportId, e)
        {
        	if(sImportId == "sampleExcel")
        	{
        		trace(this.dsList.saveXML());
        		this.grdList.createFormat();
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnMainList_onclick = function(obj,e)
        {
        	this.divView.url = "sample::mainList.xfdl";
        };

        this.btnFileUpList_onclick = function(obj,e)
        {
        	this.divView.url = "sample::sampleFileUpDownloadTrans.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnMainList.addEventHandler("onclick",this.btnMainList_onclick,this);
            this.btnFileUpList.addEventHandler("onclick",this.btnFileUpList_onclick,this);
        };
        this.loadIncludeScript("frameMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
