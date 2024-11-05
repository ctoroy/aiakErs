(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SCC010102U");
            this.set_titletext("메뉴등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"sysNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"displayPath\" type=\"string\" size=\"32\"/><Column id=\"menuId\" type=\"string\" size=\"32\"/><Column id=\"menuLv\" type=\"string\" size=\"32\"/><Column id=\"menuNm\" type=\"string\" size=\"32\"/><Column id=\"menuOrder\" type=\"string\" size=\"32\"/><Column id=\"menuUrl\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divSearch");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("staSysId","66","20","60","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("시스템ID");
            obj.set_border("1px solid");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSysId","131","20","140","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSysNm","366","20","60","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("시스템명");
            obj.set_border("1px solid");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSysNm","431","20","140","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMenuTitle","0","divSearch:10","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메뉴/프로그램 목록");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","0","staMenuTitle:10",null,"270","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMenuList");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"48\"/><Column size=\"220\"/><Column size=\"90\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"55\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"메뉴명\"/><Cell col=\"3\" text=\"시스템\"/><Cell col=\"4\" text=\"메뉴ID\"/><Cell col=\"5\" text=\"상위메뉴\"/><Cell col=\"6\" text=\"메뉴유형\"/><Cell col=\"7\" text=\"레벨\"/><Cell col=\"8\" text=\"순서\"/><Cell col=\"9\" text=\"메뉴위치\"/><Cell col=\"10\" text=\"프로그램ID\"/><Cell col=\"11\" text=\"타입\"/><Cell col=\"12\" text=\"사용여부\"/><Cell col=\"13\" text=\"호출파라미터\"/><Cell col=\"14\" text=\"출력여부\"/><Cell col=\"15\" text=\"공통여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"expr:dataset.getRowType(currow)\"/><Cell col=\"2\" text=\"bind:menuNm\" edittype=\"text\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"bind:menuId\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"bind:menuLv\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:menuOrder\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:menuUrl\" tooltiptext=\"bind:menuUrl\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"15\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","610","11","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtSysId","value","dsCond","sysId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSysNm","value","dsCond","sysNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SCC010102U_copy0.xfdl", function() {
        /**
        *  AIA 비용관리시스템 시스템
        *  @FileName 	SCC01/SCC010102U.xfdl
        *  @Creator 	송원창
        *  @CreateDate 	2024.10.22
        *  @Desction 	메뉴 등록
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024.10.22			송원창						최초생성
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
        	//this.fnSearchMyMenu();
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
        	this.fnSearchMyMenu();
        	this.fnSearchCmmBtn();
        	//this.gfnAlert("msg.general", [obj.text + " 버튼입니다."]);
        	//TODO..
        };

        //추가
        this.cfnAdd = function(obj, e)
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

        //저장
        this.cfnSave = function(obj, e)
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
        /**
         * @description 마이메뉴 조회 트랜잭션
         */
        this.fnSearchMyMenu = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "selectMenuList";
        	var sSvcUrl     = "selectMenuList.do";
        	var sInData     = "";
        	var sOutData    = "dsMenuList=MENULIST";
        	var sArg      	= "";
        	var sCallBackFnc = "fnCallback";

        	this.gfnTransaction( sSvcId , 		// transaction을 구분하기 위한 svc id값
        						sSvcUrl , 		// trabsaction을 요청할 주소
        						sInData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						sOutData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						sArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						sCallBackFnc);  // 통신방법 정의 [생략가능]
        };

        /**
         * @description 마이메뉴 조회 트랜잭션
         */
        this.fnSearchCmmBtn = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "selectCmmBtnList";
        	var sSvcUrl     = "selectCmmBtnList.do";
        	var sInData     = "";
        	var sOutData    = "dsCmmBtnList=CMMBTNLIST";
        	var sArg      	= "";
        	var sCallBackFnc = "fnCallback";

        	this.gfnTransaction( sSvcId , 		// transaction을 구분하기 위한 svc id값
        						sSvcUrl , 		// trabsaction을 요청할 주소
        						sInData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						sOutData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						sArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						sCallBackFnc);  // 통신방법 정의 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId)
        	{
        		case "selectMenuList":
        			// gdsMyMenu -> dsMyMenu 카피

        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.dsMenuList_cancolumnchange = function(obj,e)
        {
        	trace("cancolumnchang========= e", e.oldvalue, e.newvalue);
        };

        this.dsMenuList_oncolumnchanged = function(obj,e)
        {
        	trace("oncolumnchanged========= e", e.oldvalue, e.newvalue);
        };

        this.btn00_onclick = function(obj,e)
        {
        	this.fnSearchMyMenu();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.dsMenuList.addEventHandler("cancolumnchange",this.dsMenuList_cancolumnchange,this);
            this.dsMenuList.addEventHandler("oncolumnchanged",this.dsMenuList_oncolumnchanged,this);
        };
        this.loadIncludeScript("SCC010102U_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
