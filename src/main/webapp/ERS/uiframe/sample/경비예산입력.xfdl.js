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
            this.set_titletext("경비예산입력");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1527,828);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds0", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Static("sta01_00_00","789","12","76","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("단위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt04_00","854","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("edi_WF_Search");
            obj.set_value("천원");
            obj.set_readonly("true");
            obj.set_text("천원");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","79","14","10","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04_00","208","14","10","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04_00_00","427","14","10","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04_00_00_00","779","14","10","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04_00_01","297","14","10","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04_00_01_00","527","14","10","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04_00_00_00_00","844","14","10","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","0","50","342","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("경비 예산 조회");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","140","50","30","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H38");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00",null,"0","30",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W30");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","88",null,null,"30","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("TOTAL");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grdList","0","38",null,null,"0","42",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds0");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"70\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"경비 예산 항목\" cssclass=\"cell_bg01\"/><Cell col=\"1\" rowspan=\"3\" text=\"Items\" cssclass=\"cell_bg01\"/><Cell col=\"2\" rowspan=\"3\" text=\"2023&#13;&#10;Total&#13;&#10;Act\" cssclass=\"cell_bg01\"/><Cell col=\"3\" rowspan=\"3\" text=\"2024&#13;&#10;Budget&#13;&#10;(전용 후)\" cssclass=\"cell_bg01\"/><Cell col=\"4\" colspan=\"12\" cssclass=\"cell_bg01\" text=\"FY 2024\"/><Cell col=\"16\" rowspan=\"3\" cssclass=\"cell_bg01\" text=\"2024&#13;&#10;A+F\"/><Cell col=\"17\" colspan=\"5\" cssclass=\"cell_bg01\" text=\"FY 2025\"/><Cell col=\"22\" rowspan=\"3\" cssclass=\"cell_bg01\" text=\"2025&#13;&#10;Budget\"/><Cell col=\"23\" rowspan=\"3\" cssclass=\"cell_bg01\" text=\"2024F&#13;&#10;VS&#13;&#10;2023A\"/><Cell col=\"24\" rowspan=\"3\" cssclass=\"cell_bg01\" text=\"2024F&#13;&#10;VS&#13;&#10;2023B(T)\"/><Cell col=\"25\" rowspan=\"3\" cssclass=\"cell_bg01\" text=\"2025B&#13;&#10;VS&#13;&#10;2024F\"/><Cell row=\"1\" col=\"4\" text=\"Act\" cssclass=\"cell_WF_Point01\"/><Cell row=\"1\" col=\"5\" text=\"Act\" cssclass=\"cell_WF_Point01\"/><Cell row=\"1\" col=\"6\" text=\"Act\" cssclass=\"cell_WF_Point01\"/><Cell row=\"1\" col=\"7\" text=\"Act\" cssclass=\"cell_WF_Point01\"/><Cell row=\"1\" col=\"8\" text=\"Act\" cssclass=\"cell_WF_Point01\"/><Cell row=\"1\" col=\"9\" text=\"Act\" cssclass=\"cell_WF_Point01\"/><Cell row=\"1\" col=\"10\" text=\"Fcst\" cssclass=\"cell_WF_Point02\"/><Cell row=\"1\" col=\"11\" text=\"Fcst\" cssclass=\"cell_WF_Point02\"/><Cell row=\"1\" col=\"12\" text=\"Fcst\" cssclass=\"cell_WF_Point02\"/><Cell row=\"1\" col=\"13\" text=\"Fcst\" cssclass=\"cell_WF_Point02\"/><Cell row=\"1\" col=\"14\" text=\"Fcst\" cssclass=\"cell_WF_Point02\"/><Cell row=\"1\" col=\"15\" text=\"Fcst\" cssclass=\"cell_WF_Point02\"/><Cell row=\"1\" col=\"17\" text=\"Bud\" cssclass=\"cell_WF_Point03\"/><Cell row=\"1\" col=\"18\" text=\"Bud\" cssclass=\"cell_WF_Point03\"/><Cell row=\"1\" col=\"19\" text=\"Bud\" cssclass=\"cell_WF_Point03\"/><Cell row=\"1\" col=\"20\" text=\"Bud\" cssclass=\"cell_WF_Point03\"/><Cell row=\"1\" col=\"21\" text=\"Bud\" cssclass=\"cell_WF_Point03\"/><Cell row=\"2\" col=\"4\" text=\"Jan\"/><Cell row=\"2\" col=\"5\" text=\"Feb\"/><Cell row=\"2\" col=\"6\" text=\"Mar\"/><Cell row=\"2\" col=\"7\" text=\"Apr\"/><Cell row=\"2\" col=\"8\" text=\"May\"/><Cell row=\"2\" col=\"9\" text=\"Jun\"/><Cell row=\"2\" col=\"10\" text=\"Jul\"/><Cell row=\"2\" col=\"11\" text=\"Aug\"/><Cell row=\"2\" col=\"12\" text=\"Sep\"/><Cell row=\"2\" col=\"13\" text=\"Oct\"/><Cell row=\"2\" col=\"14\" text=\"Nov\"/><Cell row=\"2\" col=\"15\" text=\"Dec\"/><Cell row=\"2\" col=\"17\" text=\"Jan\"/><Cell row=\"2\" col=\"18\" text=\"Feb\"/><Cell row=\"2\" col=\"19\" text=\"Mar\"/><Cell row=\"2\" col=\"20\" text=\"...\"/><Cell row=\"2\" col=\"21\" text=\"Dec\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/></Band><Band id=\"summary\"><Cell textAlign=\"center\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell row=\"1\" textAlign=\"center\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"1\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"3\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"5\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"7\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"9\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"10\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"11\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"12\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"13\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"14\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"15\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"16\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"17\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"18\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"19\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"20\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"21\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"22\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"23\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"24\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" col=\"25\" cssclass=\"cell_WF_Sum01\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staTotal",null,"10","55","24","330",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("총 <fc v=\'#d31145\'>270</fc>건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Total");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staUnit","staTotal:5","10",null,"24","261",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("(단위: 천원)");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Total");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","staUnit:10","7","251","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Div01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnAdd","94","0","77","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.Tab00.Tabpage1.form.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnDel","174","0","77","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.Tab00.Tabpage1.form.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUp","47","0","44","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.Tab00.Tabpage1.form.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","0","0","44","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.divCmmnBtn.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ExcelDown");
            this.Tab00.Tabpage1.form.divCmmnBtn.addChild(obj.name, obj);

            obj = new Static("sta04",null,"0","100","7","-4",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H7");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta04_00",null,"31","400","7","-4",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H7");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_05",null,null,"57","32","0","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("제출");
            obj.set_cssclass("btn_WF_Custom");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("업무추진비");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("staTotal",null,"10","55","24","330",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("총 <fc v=\'#d31145\'>270</fc>건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Total");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staUnit","staTotal:5","10",null,"24","261",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("(단위: 천원)");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Total");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","staUnit:10","7","251","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnAdd","94","0","77","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.Tab00.Tabpage2.form.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnDel","174","0","77","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.Tab00.Tabpage2.form.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUp","47","0","44","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.Tab00.Tabpage2.form.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","0","0","44","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.divCmmnBtn.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ExcelDown");
            this.Tab00.Tabpage2.form.divCmmnBtn.addChild(obj.name, obj);

            obj = new Grid("grdList","0","38",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds0");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" colspan=\"2\" cssclass=\"cell_bg01\" text=\"코스트 센터\"/><Cell col=\"2\" rowspan=\"2\" colspan=\"3\" text=\"2024 Total HC\" cssclass=\"cell_bg01\"/><Cell col=\"5\" rowspan=\"2\" colspan=\"3\" text=\"2025 Total HC\" cssclass=\"cell_bg01\"/><Cell col=\"8\" rowspan=\"3\" text=\"2023&#13;&#10;Total&#13;&#10;Act\" cssclass=\"cell_bg01\"/><Cell col=\"9\" rowspan=\"3\" text=\"2024&#13;&#10;Budget&#13;&#10;(Orginal)\" cssclass=\"cell_bg01\"/><Cell col=\"10\" rowspan=\"3\" cssclass=\"cell_bg01\" text=\"2024&#13;&#10;Budget&#13;&#10;(전용 후)\"/><Cell col=\"11\" rowspan=\"3\" cssclass=\"cell_bg01\" text=\"2024F&#13;&#10;FCST\"/><Cell col=\"12\" text=\"2025\" cssclass=\"cell_bg01\"/><Cell col=\"13\" text=\"2025\" cssclass=\"cell_bg01\"/><Cell col=\"14\" text=\"2025\" cssclass=\"cell_bg01\"/><Cell col=\"15\" text=\"2025\" cssclass=\"cell_bg01\"/><Cell col=\"16\" text=\"2025\" cssclass=\"cell_bg01\"/><Cell col=\"17\" rowspan=\"3\" cssclass=\"cell_bg01\" text=\"2025&#13;&#10;Total&#13;&#10;Bud\"/><Cell col=\"18\" rowspan=\"3\" cssclass=\"cell_bg01\" text=\"Remarks\"/><Cell row=\"1\" col=\"12\" text=\"50k/M\"/><Cell row=\"1\" col=\"13\" text=\"50k/Q\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"1\" col=\"15\" text=\"150K or 50\"/><Cell row=\"1\" col=\"16\" text=\"100K\"/><Cell row=\"2\" text=\"코드\"/><Cell row=\"2\" col=\"1\" text=\"명\"/><Cell row=\"2\" col=\"2\" text=\"Total\"/><Cell row=\"2\" col=\"3\" text=\"EXCO\"/><Cell row=\"2\" col=\"4\" text=\"FL\"/><Cell row=\"2\" col=\"5\" text=\"Total\"/><Cell row=\"2\" col=\"6\" text=\"EXCO\"/><Cell row=\"2\" col=\"7\" text=\"FL\"/><Cell row=\"2\" col=\"12\" text=\"Team\"/><Cell row=\"2\" col=\"13\" text=\"WorkShop\"/><Cell row=\"2\" col=\"14\" text=\"Etc.\"/><Cell row=\"2\" col=\"15\" text=\"EXCO\"/><Cell row=\"2\" col=\"16\" text=\"FL\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("일반 접대비");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("시내 교통비");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("야근 교통비");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.Tab00);
            obj.set_text("국내 출장비");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.Tab00);
            obj.set_text("해외 출장비");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.Tab00);
            obj.set_text("Foreign Visitor");
            this.Tab00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage1.form.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form.divCmmnBtn.form,function(p){});
            this.Tab00.Tabpage1.form.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form.divCmmnBtn.form,function(p){});
            this.Tab00.Tabpage2.form.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,function(p){});
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage4.form,function(p){});
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage5.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage5.form,function(p){});
            this.Tab00.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage6.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage6.form,function(p){});
            this.Tab00.Tabpage6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage7.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage7.form,function(p){});
            this.Tab00.Tabpage7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage8.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage8.form,function(p){});
            this.Tab00.Tabpage8.form.addLayout(obj.name, obj);

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
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("경비예산입력.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
