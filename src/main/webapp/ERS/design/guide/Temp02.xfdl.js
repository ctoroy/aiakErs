(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp02");
            this.set_titletext("Multi-Detail");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1527,828);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"Essential\" type=\"STRING\" size=\"256\"/><Column id=\"Num\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Cmb\" type=\"STRING\" size=\"256\"/><Column id=\"Cal\" type=\"STRING\" size=\"256\"/><Column id=\"CenterAlign\" type=\"STRING\" size=\"256\"/><Column id=\"Btn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"ID\">가나다라마바</Col><Col id=\"Essential\">AIA</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">AIA생명</Col><Col id=\"Btn\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta04_00",null,"0","30",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W30");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","58","342","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("staTotal",null,"68","53","24","347",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("총 <fc v=\'#d31145\'>270</fc>건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Total");
            this.addChild(obj.name, obj);

            obj = new Static("staUnit","staTotal:5","68",null,"24","289",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("(단위: 원)");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Total");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","staUnit:10","65","251","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","94","0","77","24",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
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

            obj = new Grid("grdList","0","96",null,null,"30","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"필수\" cssclass=\"essential\"/><Cell col=\"2\" text=\"숫자\"/><Cell col=\"3\" text=\"익스팬드\"/><Cell col=\"4\" text=\"콤보박스\"/><Cell col=\"5\" text=\"캘린더\"/><Cell col=\"6\" text=\"중앙정렬\"/><Cell col=\"7\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Num\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:Expand\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"30\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:Cmb\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:Cal\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:CenterAlign\" displaytype=\"text\"/><Cell col=\"7\" text=\"bind:Btn\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band><Band id=\"summary\"><Cell textAlign=\"center\" text=\"소계\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"1\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"2\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"3\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"4\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"5\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"6\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"7\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" text=\"합계\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","140","50","30","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H46");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","12","96","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("예산년도");
            obj.set_cssclass("sta_WF_SchLabelEssential");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","218","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt00","639","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("Strategic Planning");
            obj.set_readonly("true");
            obj.set_text("Strategic Planning");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"62","32","20","8",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt04","537","12","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_Search");
            obj.set_value("9400");
            obj.set_text("9400");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn02","609","12","28","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_EdiSch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo04","88","12","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilityenable("true");
            obj.set_cssclass("essential");
            obj.set_readonly("false");
            var divSearch_form_cbo04_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo04_innerdataset", obj);
            divSearch_form_cbo04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2023</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2024</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2025</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo04_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calM","307","12","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_popuptype("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00","437","12","106","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("코스트센터");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","779","12","76","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("단위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt04_00","843","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("edi_WF_Search");
            obj.set_value("천원");
            obj.set_readonly("true");
            obj.set_text("천원");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04_00_00",null,"89","400","7","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H7");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01","0","50","90","8",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H8");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1527,828,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.calM.addEventHandler("ondropdown",this.calM_ondropdown,this);
            this.divSearch.form.calM.addEventHandler("oneditclick",this.calM_oneditclick,this);
        };
        this.loadIncludeScript("Temp02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
