(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ADMCOM0203U");
            this.set_titletext("권한별사용자관리");
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


            obj = new Dataset("dsAuthUsrMngmList", this);
            obj._setContents("<ColumnInfo><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"authId\" type=\"STRING\" size=\"10\"/><Column id=\"authNm\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"30\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmak\" type=\"STRING\" size=\"4000\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubCond", this);
            obj._setContents("<ColumnInfo><Column id=\"authId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthUsrMngm", this);
            obj._setContents("<ColumnInfo><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"authId\" type=\"STRING\" size=\"10\"/><Column id=\"authNm\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"30\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmak\" type=\"STRING\" size=\"4000\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"authId\" type=\"STRING\" size=\"10\"/><Column id=\"authNm\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"30\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmak\" type=\"STRING\" size=\"4000\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnEmpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"30\"/><Column id=\"empEngNm\" type=\"STRING\" size=\"2000\"/><Column id=\"empNm\" type=\"STRING\" size=\"200\"/><Column id=\"deptRlNm\" type=\"STRING\" size=\"200\"/><Column id=\"lcetNo\" type=\"STRING\" size=\"600\"/><Column id=\"emalAddr\" type=\"STRING\" size=\"200\"/><Column id=\"grad\" type=\"STRING\" size=\"10\"/><Column id=\"dutyTtlNm\" type=\"STRING\" size=\"200\"/><Column id=\"rgntnYn\" type=\"STRING\" size=\"1\"/><Column id=\"chgYn\" type=\"STRING\" size=\"1\"/><Column id=\"grpName\" type=\"STRING\" size=\"50\"/><Column id=\"idNm\" type=\"STRING\" size=\"100\"/><Column id=\"deptCd\" type=\"STRING\" size=\"9\"/><Column id=\"deptNm\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divSearch");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("staWord","0","12","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WF_SchLabelEssential");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtWord","staWord:10","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAuthClssfc","edtWord:10","12","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("권한타입");
            obj.set_cssclass("sta_WF_SchLabelEssential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAuthClssfc","staAuthClssfc:10","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsAuthClssfc");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("권한");
            obj.set_value("R");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAuthCodeTitle","0","divSearch:8","180","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("권한코드목록");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAuthCodeList","0","staAuthCodeTitle:10","500",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("none");
            obj.set_binddataset("dsAuthCodeList");
            obj.set_cellsizingtype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"권한코드\"/><Cell col=\"2\" text=\"권한명\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:authId\" displaytype=\"text\" editmaxlength=\"10\" editimemode=\"alpha\" editinputmode=\"upper\" editinputtype=\"alpha,digit\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:authNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:rmak\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAuthUsrList","grdAuthCodeList:20","106",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAuthUsrMngmList");
            obj.set_cellsizingtype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"권한명\"/><Cell col=\"4\" text=\"사원명\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" text=\"bind:useYn\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:deptNm\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:authNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:empNm\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:rmak\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"4000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staAuthUsrTitle","grdAuthCodeList:20","divSearch:8","180","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사용자목록");
            obj.set_cssclass("sta_WF_Title");
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
        this.registerScript("ADMCOM0203U.xfdl", function() {
        /**
        *  AIA 비용관리시스템 시스템
        *  @FileName 	ADMCOM02/ADMCOM0203U.xfdl
        *  @Creator 	강성호
        *  @CreateDate 	2024.11.11
        *  @Desction 	권한별 사용자관리
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024.11.11			강성호						최초생성
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

        //추가
        this.cfnAdd = function(obj, e)
        {
        	this.fnAdd();
        };

        //삭제
        this.cfnDel = function(obj, e)
        {
        	this.fnDel(this.dsAuthUsrMngmList);
        };

        //저장
        this.cfnSave = function(obj, e)
        {
        	this.fnSaveAuthUsrList();
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
         * @description 권한별 사용자 조회 트랜잭션
         */
        this.fnSearchAuthUsr = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "selectAuthUsrMngm";
        	var sSvcUrl     = "selectAuthUsrMngm.do";
        	var sInData     = "dsIn=dsEmpInfo";
        	var sOutData    = "dsAuthUsrMngm=AUTHUSRMNGM";
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
         * @description 권한별 사용자 조회 트랜잭션
         */
        this.fnSearchAuthUsrList = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "selectAuthUsrMngmList";
        	var sSvcUrl     = "selectAuthUsrMngmList.do";
        	var sInData     = "dsIn=dsSubCond";
        	var sOutData    = "dsAuthUsrMngmList=AUTHUSRMNGMLIST";
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
         * @description 권한별 사용자 저장 트랜잭션
         */
        this.fnSaveAuthUsrList = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "saveAuthUsrList";
        	var sSvcUrl     = "saveAuthUsrMngmList.do";
        	var sInData     = "AUTHUSRMNGMLIST=dsAuthUsrMngmList:U";
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
        		case "selectAuthUsrMngm":
        			if( this.dsAuthUsrMngm.getRowCount() > 0 ){
        				var authNm = this.dsAuthUsrMngm.getColumn(0, 'authNm');
        				var msg = authNm + ' 권한에 등록된 사원입니다. 확인 후 진행바랍니다.';
        				this.alert(msg);
        			} else {
        				this.fnUsrAdd();
        			}
        			break;
        		case "saveAuthUsrList":
        			this.fnSearchAuthUsrList();
        			break;
        		default:break;
        	}
        };

        this.fnPopupCallback = function(strId, rtnObj)
        {
        	this.dsEmpInfo.loadJSON(rtnObj);
        	if( this.dsEmpInfo.getRowCount() > 0 ){
        		this.fnSearchAuthUsr();
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

        this.fnAdd = function()
        {
        	this.gfnOpenPopup("ADMBCM0805P", "ADMBCM08::ADMBCM0805P.xfdl", null, "fnPopupCallback");
        };

        this.fnDel = function(objds)
        {
        	objds.enableevent = false;
        	objds.filter("useYn == 'Y'");
        	if(objds.rowcount > 0)
        	{
        		for(var i = objds.rowcount - 1; i > -1; i--)
        		{
        			if (objds.getColumn(i, "useYn") == "Y" )
        			{
        				objds.deleteRow(i);
        			}
        		}
        	}
        	objds.filter("");
        	objds.enableevent = true;
        };

        this.fnUsrAdd = function(){
        	var mRow = this.dsAuthCodeList.rowposition;
        	var authId = this.dsAuthCodeList.getColumn(mRow, 'authId');
        	var authNm = this.dsAuthCodeList.getColumn(mRow, 'authNm');
        	var empNo = this.dsEmpInfo.getColumn(0, 'empNo');
        	var empNm = this.dsEmpInfo.getColumn(0, 'empNm');
        	var deptNm = this.dsEmpInfo.getColumn(0, 'deptNm');

        	var nRow = this.dsAuthUsrMngmList.addRow();
        	this.dsAuthUsrMngmList.setColumn(nRow, 'authId', authId);
        	this.dsAuthUsrMngmList.setColumn(nRow, 'authNm', authNm);
        	this.dsAuthUsrMngmList.setColumn(nRow, 'empNo', empNo);
        	this.dsAuthUsrMngmList.setColumn(nRow, 'empNm', empNm);
        	this.dsAuthUsrMngmList.setColumn(nRow, 'deptNm', deptNm);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.dsAuthCodeList_onrowposchanged = function(obj,e)
        {
        	var nRow = this.dsAuthCodeList.rowposition;
        	this.dsSubCond.clearData();
        	this.dsSubCond.addRow();
        	this.dsSubCond.setColumn(0, 'authId', this.dsAuthCodeList.getColumn(nRow, 'authId'));
        	this.fnSearchAuthUsrList();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsAuthCodeList.addEventHandler("onrowposchanged",this.dsAuthCodeList_onrowposchanged,this);
        };
        this.loadIncludeScript("ADMCOM0203U.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();