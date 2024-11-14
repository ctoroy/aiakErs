(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp16_1");
            this.set_titletext("Tab Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1497,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Edi\" type=\"STRING\" size=\"256\"/><Column id=\"Essential\" type=\"STRING\" size=\"256\"/><Column id=\"Num\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Cmb\" type=\"STRING\" size=\"256\"/><Column id=\"Cal\" type=\"STRING\" size=\"256\"/><Column id=\"CenterAlign\" type=\"STRING\" size=\"256\"/><Column id=\"Btn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">01</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">02</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">03</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">04</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">05</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">06</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">07</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">08</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">09</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","230","0","30","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H38");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","932","0","30","7",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H7");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","184",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/><Cell col=\"4\" text=\"숫자\"/><Cell col=\"5\" text=\"익스팬드\"/><Cell col=\"6\" text=\"콤보박스\"/><Cell col=\"7\" text=\"캘린더\"/><Cell col=\"8\" text=\"중앙정렬\"/><Cell col=\"9\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:Num\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:Expand\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"30\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:Cmb\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"7\" text=\"bind:Cal\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:CenterAlign\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:Btn\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","1","146","342","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("상세목록");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn48",null,"7","86","24","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("커스텀버튼");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn48_00",null,"7","86","24","89",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("커스텀버튼");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staTotal",null,"156","53","24","320",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("총 <fc v=\'#d31145\'>270</fc>건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Total");
            this.addChild(obj.name, obj);

            obj = new Static("staUnit","staTotal:5","156",null,"24","262",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(단위: 원)");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Total");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","staUnit:10","153","251","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","94","0","77","24",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행추가 ");
            obj.set_cssclass("btn_WF_Add");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("Button36","174","0","77","24",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUp","47","0","44","24",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","0","0","44","24",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ExcelDown");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Static("sta04_00_00",null,"177","400","7","3",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H7");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01_00_00","0","138","90","8",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H8");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01","140","138","30","46",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H46");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0","38",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","33",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","120","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta05","0","33","120","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta07","0","66",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta08","0","66","120","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta09","374","0","120","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_LabelEssential");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta10","748","0","120","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta11","1122","0","120","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta12","748","33","120","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta13","1122","33","120","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta14","374","33","120","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta15","1122","66","120","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17","748","66","120","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cbo00","124","5","246","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00","124","38","246","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt01","498","38","246","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("edi_WF_Search");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02","498","5","246","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("essential");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cbo01","124","71","60","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt03","196","71","60","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt04","268","71","60","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_value("5678");
            obj.set_text("5678");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","184","71","12","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta01","256","71","12","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn02","342","38","28","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn00","716","38","28","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_EdiSch");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05","872","5","246","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("25");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdo00","872","38","141","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_form_rdo00_innerdataset", obj);
            div01_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_form_rdo00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new CheckBox("chk00","872","71","150","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("27");
            obj.set_text("사용");
            obj.set_value("true");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("cal00","1246","5","246","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("28");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn01","1452","38","40","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("29");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.div01.addChild(obj.name, obj);

            obj = new Spin("spn00","1246","71","246","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("30");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","1246","38","203","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("31");
            this.div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1497,736,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp16_1.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	Temp16_1.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div01.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01.form.btn00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("Temp16_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
