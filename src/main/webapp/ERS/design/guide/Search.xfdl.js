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
            this.set_cssclass("frm_WF_Frame");
            this.set_titletext("Search");
            if (Form == this.constructor)
            {
                this._setFormPosition(1527,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","74","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_SchLabelEssential");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div00_form_Combo01_innerdataset = new nexacro.NormalDataset("Div00_form_Combo01_innerdataset", obj);
            Div00_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div00_form_Combo02_innerdataset = new nexacro.NormalDataset("Div00_form_Combo02_innerdataset", obj);
            Div00_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div00_form_Combo03_innerdataset = new nexacro.NormalDataset("Div00_form_Combo03_innerdataset", obj);
            Div00_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","209","12","86","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","296","12","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","74","12","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","446","12","86","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","534","12","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("9");
            var Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_innerdataset", obj);
            Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">AIA</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","694","12","86","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","782","12","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"64","36","20","6",null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04","64","14","10","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04_00","189","14","10","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04_01","286","14","10","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04_01_00","436","14","10","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04_01_01","684","14","10","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04_01_01_00","772","14","10","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W10");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04_01_01_00_00","1475","14","20","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04_01_01_00_00_00","1435",null,"20","6",null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H6");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","30",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","93",null,"79","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","74","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div00_00_form_Combo01_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo01_innerdataset", obj);
            Div00_00_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div00_00_form_Combo02_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo02_innerdataset", obj);
            Div00_00_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div00_00_form_Combo03_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo03_innerdataset", obj);
            Div00_00_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","209","12","86","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","296","12","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","74","12","115","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","446","12","86","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","694","12","86","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","782","12","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_taborder("10");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","41","74","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","209","41","86","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","296","41","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01_00","74","41","115","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","446","41","86","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","694","41","86","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","782","41","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_taborder("17");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"64","36","20","12",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","534","12","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("19");
            var Div00_00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo00_innerdataset", obj);
            Div00_00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">AIA</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Combo00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","534","41","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("20");
            var Div00_00_form_Combo00_00_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo00_00_innerdataset", obj);
            Div00_00_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">AIA</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Combo00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("sta04_01_01_00_00","1475","43","20","21",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("sta04_01_01_00_00_00","1435",null,"20","12",null,"0",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H12");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","0","220",null,"108","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","74","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div00_00_00_form_Combo01_innerdataset = new nexacro.NormalDataset("Div00_00_00_form_Combo01_innerdataset", obj);
            Div00_00_00_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div00_00_00_form_Combo02_innerdataset = new nexacro.NormalDataset("Div00_00_00_form_Combo02_innerdataset", obj);
            Div00_00_00_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div00_00_00_form_Combo03_innerdataset = new nexacro.NormalDataset("Div00_00_00_form_Combo03_innerdataset", obj);
            Div00_00_00_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","209","12","86","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","296","12","140","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("6");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","74","12","115","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","446","12","86","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("8");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","694","12","86","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("9");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","782","12","150","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_taborder("10");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","41","74","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("11");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","209","41","86","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","296","41","140","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("13");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01_00","74","41","115","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","446","41","86","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","694","41","86","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("16");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","782","41","150","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_taborder("17");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","70","74","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("18");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","209","70","86","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("19");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","296","70","140","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("20");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01_00_00","74","70","115","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","446","70","86","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("22");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","694","70","86","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("23");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","782","70","150","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_taborder("24");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"64","36","20","12",null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("25");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","534","12","150","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("26");
            var Div00_00_00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_00_00_form_Combo00_innerdataset", obj);
            Div00_00_00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">AIA</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_form_Combo00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","534","41","150","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("27");
            var Div00_00_00_form_Combo00_00_innerdataset = new nexacro.NormalDataset("Div00_00_00_form_Combo00_00_innerdataset", obj);
            Div00_00_00_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">AIA</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_form_Combo00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","534","70","150","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("28");
            var Div00_00_00_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("Div00_00_00_form_Combo00_00_00_innerdataset", obj);
            Div00_00_00_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">AIA</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_form_Combo00_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("sta04_01_01_00_00","1475","72","20","21",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("sta04_01_01_00_00_00","1435",null,"20","12",null,"0",null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H12");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","0","370",null,"137","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","74","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div00_00_00_00_form_Combo01_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_form_Combo01_innerdataset", obj);
            Div00_00_00_00_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div00_00_00_00_form_Combo02_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_form_Combo02_innerdataset", obj);
            Div00_00_00_00_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div00_00_00_00_form_Combo03_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_form_Combo03_innerdataset", obj);
            Div00_00_00_00_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","209","12","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","296","12","140","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("6");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","74","12","115","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","446","12","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","694","12","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","782","12","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_taborder("10");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","41","74","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","209","41","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","296","41","140","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("13");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01_00","74","41","115","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","446","41","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","694","41","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("16");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","782","41","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_taborder("17");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","70","74","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("18");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","209","70","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("19");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","296","70","140","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("20");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01_00_00","74","70","115","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","446","70","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("22");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","694","70","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("23");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","782","70","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_taborder("24");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","99","74","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("25");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","209","99","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("26");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","296","99","140","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("27");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01_00_00_00","74","99","115","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","446","99","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("29");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","694","99","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("30");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","782","99","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_taborder("31");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"64","36","20","12",null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("32");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","534","12","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("33");
            var Div00_00_00_00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_form_Combo00_innerdataset", obj);
            Div00_00_00_00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">AIA</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_form_Combo00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","534","41","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("34");
            var Div00_00_00_00_form_Combo00_00_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_form_Combo00_00_innerdataset", obj);
            Div00_00_00_00_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">AIA</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_form_Combo00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","534","70","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("35");
            var Div00_00_00_00_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_form_Combo00_00_00_innerdataset", obj);
            Div00_00_00_00_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">AIA</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_form_Combo00_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","534","99","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("36");
            var Div00_00_00_00_form_Combo00_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_form_Combo00_00_00_00_innerdataset", obj);
            Div00_00_00_00_form_Combo00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">AIA</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">AIA</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_form_Combo00_00_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta04_01_01_00_00_00","1435",null,"20","12",null,"0",null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H12");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta04_01_01_00_00","1475","101","20","21",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.Div00_00_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form,function(p){});
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00.form,function(p){});
            this.Div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1527,700,this,function(p){});
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

        };
        this.loadIncludeScript("Search.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
