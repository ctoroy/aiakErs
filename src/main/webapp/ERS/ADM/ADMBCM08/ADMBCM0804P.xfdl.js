(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ADMBCM0804P");
            this.set_titletext("항목코드정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsArtcList", this);
            obj._setContents("<ColumnInfo><Column id=\"bdgYear\" type=\"STRING\" size=\"4\"/><Column id=\"cstCntrCd\" type=\"STRING\" size=\"4\"/><Column id=\"cstCntrCdNm\" type=\"STRING\" size=\"3000\"/><Column id=\"artcCd\" type=\"STRING\" size=\"10\"/><Column id=\"artcCdNm\" type=\"STRING\" size=\"3000\"/><Column id=\"pjtClssfc\" type=\"STRING\" size=\"6\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsArtcCond", this);
            obj._setContents("<ColumnInfo><Column id=\"searchText\" type=\"STRING\" size=\"256\"/><Column id=\"bdgYear\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnArtcInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bdgYear\" type=\"STRING\" size=\"4\"/><Column id=\"cstCntrCd\" type=\"STRING\" size=\"4\"/><Column id=\"cstCntrCdNm\" type=\"STRING\" size=\"3000\"/><Column id=\"artcCd\" type=\"STRING\" size=\"10\"/><Column id=\"artcCdNm\" type=\"STRING\" size=\"3000\"/><Column id=\"pjtClssfc\" type=\"STRING\" size=\"6\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staEmpList","25","78","342","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아이템코드 정보");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdArtcList","20","116",null,null,"20","62",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsArtcList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"예산년도\"/><Cell col=\"1\" text=\"코스트센터코드\"/><Cell col=\"2\" text=\"코스트센터명\"/><Cell col=\"3\" text=\"항목코드\"/><Cell col=\"4\" text=\"항목명\"/><Cell col=\"5\" text=\"프로젝트구분명\"/><Cell col=\"6\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:bdgYear\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:cstCntrCd\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:cstCntrCdNm\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:artcCd\" displaytype=\"normal\" combodataset=\"dsRgntnYn\" combocodecol=\"code\" combodatacol=\"data\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"normal\" textAlign=\"center\" text=\"bind:artcCdNm\"/><Cell col=\"5\" displaytype=\"normal\" textAlign=\"center\" text=\"bind:pjtClssfc\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" textAlign=\"center\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","165","70","30","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H46");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","20","0",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H20");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 20");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 20");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"57","32","20","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup02");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"57","32","80","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20",null,null,"20","20","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H20");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","730",null,"30","10",null,"52",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H10");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","20",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBdgYear","0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("예산년도");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"62","32","20","8",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnBdgYear","staBdgYear:10","12","160","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staArtcCdNm","spnBdgYear:10","12","106","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("항목코드(명)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtArtcCdNm","staArtcCdNm:10","12","160","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_Search");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04_01","20","70","90","8",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H8");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00_00",null,"109","400","7","24",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",850,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnBdgYear","value","dsArtcCond","bdgYear");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtArtcCdNm","value","dsArtcCond","searchText");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ADMBCM0804P.xfdl", function() {
        /**
        *  항목코드정보
        *  @FileName 	ADMBCM08/ADMBCM0804P.xfdl
        *  @Creator 	이중섭
        *  @CreateDate 	2024.11.12
        *  @Desction    항목코드정보 화면
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/01/05			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvSearch = "";	// 부모에서 넘긴 검색조건

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.ADMBCM0804P_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	// 초기화
        	this.fnPopupInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
         * @description 사원 조회 트랜잭션
         */
        this.fnSearchArtcList = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "selectArtcList";
        	var sSvcUrl     = "selectArtcList.do";
        	var sInData     = "dsIn=dsArtcCond";
        	var sOutData    = "dsArtcList=ARTCLIST";
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
        		case "selectArtcList":
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 초기화
        */
        this.fnPopupInit = function()
        {
        	this.dsArtcList.clearData();
        	this.dsArtcCond.setColumn(0,'bdgYear',new Date().getFullYear());
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 취소 버튼 클릭 이벤트
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup(null);
        };

        /**
         * @description 확인 버튼 클릭 이벤트
        */
        this.btnConfirm_onclick = function(obj,e)
        {
        	this.fnReturn();
        };

        /**
         * @description 그리드셀 더블클릭 이벤트
        */
        this.grdList_oncelldblclick = function(obj,e)
        {
        	this.fnReturn();
        };

        this.fnReturn = function(){
        	var nRow = this.dsArtcList.rowposition;
        	this.dsRtnArtcInfo.clearData();
        	this.dsRtnArtcInfo.addRow();
        	this.dsRtnArtcInfo.copyRow(0, this.dsArtcList, nRow);
        	this.gfnClosePopup(this.dsRtnArtcInfo.saveJSON());
        }

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnSearchArtcList();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ADMBCM0804P_onload,this);
            this.grdArtcList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
        };
        this.loadIncludeScript("ADMBCM0804P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
