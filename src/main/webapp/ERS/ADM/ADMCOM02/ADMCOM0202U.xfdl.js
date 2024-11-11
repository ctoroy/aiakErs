(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ADMCOM0202U");
            this.set_titletext("권한그룹별 메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"searchText\" type=\"STRING\" size=\"256\"/><Column id=\"authClssfc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthCodeList", this);
            obj._setContents("<ColumnInfo><Column id=\"authId\" type=\"STRING\" size=\"10\"/><Column id=\"authNm\" type=\"STRING\" size=\"4000\"/><Column id=\"rmak\" type=\"STRING\" size=\"4000\"/><Column id=\"authClssfc\" type=\"STRING\" size=\"2\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/><Column id=\"cretrId\" type=\"STRING\" size=\"50\"/><Column id=\"cretDttm\" type=\"DATE\" size=\"255\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"50\"/><Column id=\"mdfDttm\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">사용</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthClssfc", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">R</Col><Col id=\"data\">권한</Col></Row><Row><Col id=\"code\">D</Col><Col id=\"data\">부서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"authUseYn\" type=\"STRING\" size=\"1\"/><Column id=\"mnuId\" type=\"STRING\" size=\"50\"/><Column id=\"mnuNm\" type=\"STRING\" size=\"50\"/><Column id=\"sysId\" type=\"STRING\" size=\"50\"/><Column id=\"upMnuId\" type=\"STRING\" size=\"50\"/><Column id=\"mnuTpCd\" type=\"STRING\" size=\"10\"/><Column id=\"mnuLvlSize\" type=\"INT\" size=\"10\"/><Column id=\"prgmId\" type=\"STRING\" size=\"50\"/><Column id=\"prgmPathNm\" type=\"STRING\" size=\"500\"/><Column id=\"prgmTypeNm\" type=\"STRING\" size=\"10\"/><Column id=\"smmnParmtNm\" type=\"STRING\" size=\"20\"/><Column id=\"sortSeq\" type=\"STRING\" size=\"10\"/><Column id=\"authYn\" type=\"STRING\" size=\"1\"/><Column id=\"rmak\" type=\"STRING\" size=\"4000\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/><Column id=\"mnuPrintYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMnuPrintYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">출력</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">미출력</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthId", this);
            obj._setContents("<ColumnInfo><Column id=\"authId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divSearch");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("staWord","20","20","60","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색어");
            obj.set_border("1px solid");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtWord","staWord:10","20","140","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAuthClssfc","edtWord:50","20","60","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("권한타입");
            obj.set_border("1px solid");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAuthClssfc","staAuthClssfc:10","20","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsAuthClssfc");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("권한");
            obj.set_value("R");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMenuTitle","0","divSearch:10","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("권한코드목록");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAuthCodeList","0","staMenuTitle:10",null,"270","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAuthCodeList");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"권한코드\"/><Cell col=\"2\" text=\"권한명\"/><Cell col=\"3\" text=\"비고\"/><Cell col=\"4\" text=\"사용여부\"/><Cell col=\"5\" text=\"등록자\"/><Cell col=\"6\" text=\"등록일\"/><Cell col=\"7\" text=\"수정자\"/><Cell col=\"8\" text=\"수정일\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:authId\" displaytype=\"text\" editmaxlength=\"10\" editimemode=\"alpha\" editinputmode=\"upper\" editinputtype=\"alpha,digit\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:authNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:rmak\" displaytype=\"text\"/><Cell col=\"4\" displaytype=\"combotext\" text=\"bind:useYn\" combodataset=\"dsUseYn\" combocodecol=\"code\" combodatacol=\"data\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:cretrId\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:cretDttm\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"7\" text=\"bind:mdfrId\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:mdfDttm\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuTitle00","2","400","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메뉴목록");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAuthMenuList","0","staMenuTitle00:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAuthMenuList");
            obj.set_cellsizingtype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_autoenter("select");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"400\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"메뉴\"/><Cell col=\"2\" text=\"메뉴코드\"/><Cell col=\"3\" text=\"메뉴구분\"/><Cell col=\"4\" text=\"출력여부\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:mnuTpCd==&apos;프로그램&apos; ? &apos;checkboxcontrol&apos;:&apos;none&apos;\" edittype=\"expr:mnuTpCd==&apos;프로그램&apos; ? &apos;checkbox&apos;:&apos;none&apos;\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" text=\"bind:authUseYn\"/><Cell col=\"1\" text=\"bind:mnuNm\" displaytype=\"treeitemcontrol\" textAlign=\"left\" treelevel=\"bind:mnuLvlSize\" edittype=\"tree\" treecheck=\"bind:authUseYn\" treestate=\"bind:mnuLvlSize\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"2\" text=\"bind:mnuId\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:mnuTpCd\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:mnuPrintYn\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"dsMnuPrintYn\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"5\" text=\"bind:useYn\" displaytype=\"combotext\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" combodataset=\"dsUseYn\" combocodecol=\"code\" combodatacol=\"data\"/></Band></Format></Formats>");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ADMCOM0202U.xfdl", function() {
        /**
        *  AIA 비용관리시스템 시스템
        *  @FileName 	ADMCOM02/ADMCOM0202U.xfdl
        *  @Creator 	강성호
        *  @CreateDate 	2024.11.07
        *  @Desction 	권한그룹별 메뉴관리
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024.11.07			강성호						최초생성
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
        	this.fnSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnSave : 저장 / cfnDel : 삭제 / cfnExecl : 엑셀.. / cfnPrint : 인쇄 / cfnHep : 도움말  / cfnClose : 화면 닫기전 체크)
         * 추가 버튼은 prefix cfn 으로 시작하여 명칭을 만든다.
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function(obj, e)
        {
        	this.fnSearch();
        };

        //저장
        this.cfnSave = function(obj, e)
        {
        	this.fnSaveAuthMenuList();
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
         * @description 권한코드 조회 트랜잭션
         */
        this.fnSearchAuthCodeList = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "selectAuthCodeList";
        	var sSvcUrl     = "selectAuthCodeList.do";
        	var sInData     = "dsIn=dsCond";
        	var sOutData    = "dsAuthCodeList=AUTHCODELIST";
        	var sArg      	= "";
        	var sCallBackFnc = "fnCallback";

        	this.gfnTransaction( sSvcId , 	// transaction을 구분하기 위한 svc id값
        						sSvcUrl , 			// trabsaction을 요청할 주소
        						sInData , 			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						sOutData , 			// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						sArg, 				// 입력갑스로 보낼 arguments, strFormData="20120607"
        						sCallBackFnc);  	// 통신방법 정의 [생략가능]
        };

        /**
         * @description 권한별 메뉴조회 트랜잭션
         */
        this.fnSearchAuthMenuList = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "selectAuthMenuList";
        	var sSvcUrl     = "selectAuthMenuList.do";
        	var sInData     = "dsIn=dsAuthId";
        	var sOutData    = "dsAuthMenuList=AUTHMENULIST";
        	var sArg      	= "";
        	var sCallBackFnc = "fnCallback";

        	this.gfnTransaction( sSvcId , 	// transaction을 구분하기 위한 svc id값
        						sSvcUrl , 			// trabsaction을 요청할 주소
        						sInData , 			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						sOutData , 			// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						sArg, 				// 입력갑스로 보낼 arguments, strFormData="20120607"
        						sCallBackFnc);  	// 통신방법 정의 [생략가능]
        };

        /**
         * @description 권한별 메뉴저장 트랜잭션
         */
        this.fnSaveAuthMenuList = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "saveAuthMenuList";
        	var sSvcUrl     = "saveAuthMenuList.do";
        	var sInData     = "AUTHMENULIST=dsAuthMenuList:U";
        	var sOutData    = "";
        	var sArg      	= "";
        	var sCallBackFnc = "fnCallback";

        	this.gfnTransaction( sSvcId , 	// transaction을 구분하기 위한 svc id값
        						sSvcUrl , 			// trabsaction을 요청할 주소
        						sInData , 			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						sOutData , 			// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						sArg, 				// 입력갑스로 보낼 arguments, strFormData="20120607"
        						sCallBackFnc);  	// 통신방법 정의 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId)
        	{
        		case "selectAuthCodeList":
        			break;
        		case "selectAuthMenuList":
        			break;
        		case "saveAuthCodeList":
        			this.fnSearchAuthCodeList();
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSearch = function()
        {
        	this.dsCond.setColumn(0, "searchText", this.divSearch.form.edtWord.value);
        	this.dsCond.setColumn(0, "authClssfc", this.divSearch.form.cboAuthClssfc.value);
        	this.fnSearchAuthCodeList();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.dsAuthCodeList_onrowposchanged = function(obj,e)
        {
        	var authId = obj.getColumn(e.newrow, 'authId');
        	this.dsAuthId.setColumn(0, 'authId', authId);
        	this.fnSearchAuthMenuList();
        };

        this.dsAuthMenuList_oncolumnchanged = function(obj,e)
        {
        	var mRow = this.dsAuthCodeList.rowposition;
        	var authId = this.dsAuthCodeList.getColumn(mRow, 'authId');
        	var oldAuthUseYn = obj.getOrgColumn(e.row, 'authUseYn');
        	var authUseYn = obj.getColumn(e.row, 'authUseYn');

        	if( oldAuthUseYn == 'N' && authUseYn == 'Y' ){
        		obj.setColumn(e.row, 'authId', authId);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsAuthCodeList.addEventHandler("onrowposchanged",this.dsAuthCodeList_onrowposchanged,this);
            this.dsAuthMenuList.addEventHandler("oncolumnchanged",this.dsAuthMenuList_oncolumnchanged,this);
        };
        this.loadIncludeScript("ADMCOM0202U.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
