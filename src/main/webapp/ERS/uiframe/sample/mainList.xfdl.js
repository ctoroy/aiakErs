(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main");
            this.set_titletext("main");
            this.set_background("lightgreen");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchKeyword\" type=\"STRING\" size=\"100\"/><Column id=\"searchCondition\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"searchKeyword\"/><Col id=\"searchCondition\">TITLE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","39","20","241","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("MAIN frame");
            obj.set_font("normal 800 36px/normal \"Malgun Gothic\"");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","40","145",null,"425","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","630","70","56","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","696","70","104","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","810","70","97","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀 업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","917","70","97","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("데이터 삭제");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","40","102","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀 다운로드 테스트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1020,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mainList.xfdl", function() {
        /**
        *  AIA 비용관리시스템
        *  @FileName 	sampleScript.xfdl
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

        this.Button00_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.btn00_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle.text + " 리스트";

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList, "", "sampleExcelExportImport", "","", sSubTitle, true, "");
        };

        this.btn01_onclick = function(obj,e)
        {
        	// Excel Import 공통함수 호출
        	//this.gfnExcelImport("dsList", "", "A2", "fnExcelImportCallback", "sampleExcel");

        	//this.gfnExcelImport("dsList","A1:E1","A2","fnExcelImportCallback","ExcelImport");

        	//this.gfnExcelImportAll("dsList","sheet1","A1:E1","A2","fnImportCallback","import",this);

        	this.gfnExcelImport("dsList", "", "A2", "fnExcelImportCallback", "sampleExcel", "", "A1:E1");
        };

        //
        //
        // this.gfnExcelImportAll = function(objDs,sSheet,sHead,sBody,sCallback,sImportId,objForm)
        // {
        // 	if(this.gfnIsNull(sSheet)) sSheet = "sheet1";
        // 	if(this.gfnIsNull(sBody)) sBody = "A2";
        // 	if(this.gfnIsNull(sHead)) return false;
        //
        // 	var svcUrl = "svcUrl::XExportImport.do";
        //
        // 	var objImport ;
        //
        // 	objImport = new nexacro.ExcelImportObject(objDs+"_ExcelImport",this);
        // 	objImport.set_importurl(svcUrl);
        // 	objImport.set_importtype(nexacro.ImportTypes.EXCEL);
        //
        // 	if (!this.gfnIsNull(sCallback))
        // 	{
        // 		objImport.callback = sCallback;
        // 		objImport.importid = sImportId;
        // 		objImport.form = objForm;
        // 	}
        //
        // 	//objImport.addEventHandler("onsuccess", this.gfnImportOnsuccess, this);
        // 	//objImport.addEventHandler("onerror",   this.gfnImportOnerror,   this);
        //
        // 	objImport.addEventHandler("onsuccess", this.gfnImportAllOnsuccess, this);
        // 	//objImport.addEventHandler("onerror", this.gfnImportOnerror, this);
        // 	var sParam1 = "[Command=getsheetdata;Output=outds;Head="+sSheet+"!"+sHead+";Body="+sSheet+"!"+sBody+"]";
        // 	var sParam2 = "["+objDs+"=outds]";
        //
        // 	objImport.importData("", sParam1, sParam2);
        // 	objImport = null;
        //
        // 	//this.setWaitCursor(true);
        // };
        //
        // this.gfnImportAllOnsuccess = function(obj,  e)
        // {
        // 	this.setWaitCursor(false);
        // 	var sCallback = obj.callback;
        // 	var sImportId = obj.importid;
        // 	//화면의 callback 함수 호출
        // 	this.fnExcelImportCallback(sImportId);
        // };
        //
        //
        // this.btn02_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	this.dsList.clearData();
        // };

        this.btn02_onclick = function(obj,e)
        {
        	this.dsList.clearData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
        };
        this.loadIncludeScript("mainList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
