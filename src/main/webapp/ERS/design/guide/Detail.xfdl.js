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
            this.set_titletext("Detail");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1527,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div01","0","0",null,"34","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","108","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static09","257","0","108","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","514","0","108","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","771","0","108","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","112","5","141","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","369","5","141","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","626","5","141","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","883","5","142","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd ");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","30",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0",null,null,"100","30","382",null,null,null,null,this);
            obj.set_taborder("2");
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

            obj = new Div("div01_00","0",null,null,"67","30","555",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","33",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("1");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("2");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05","0","33","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("3");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta09","374","0","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("4");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_LabelEssential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta10","748","0","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("5");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta11","1122","0","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("6");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12","748","33","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("7");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta13","1122","33","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("8");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta14","374","33","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("9");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00","124","5","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("10");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00","124","38","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt01","498","38","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("edi_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02","498","5","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("essential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn02","342","38","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn00","716","38","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_EdiSch");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05","872","5","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("16");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rdo00","872","38","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_00_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_00_form_rdo00_innerdataset", obj);
            div01_00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rdo00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00.addChild(obj.name, obj);

            obj = new Calendar("cal00","1246","5","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("18");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn01","1452","38","40","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("19");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","1246","38","203","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("20");
            this.div01_00.addChild(obj.name, obj);

            obj = new Div("div01_01","0",null,null,"133","30","149",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","33",null,"34","0",null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"34","0",null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("1");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","120","34",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("2");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta05","0","33","120","34",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("3");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta07","0","66",null,"34","0",null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("4");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta08","0","66","120","34",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("5");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta09","374","0","120","34",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("6");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_LabelEssential");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta10","748","0","120","34",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("7");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta11","1122","0","120","34",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("8");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta12","748","33","120","34",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("9");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta13","1122","33","120","34",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("10");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta14","374","33","120","34",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("11");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta15","1122","66","120","34",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("12");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta17","748","66","120","34",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("13");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_01.addChild(obj.name, obj);

            obj = new Combo("cbo00","124","5","246","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            this.div01_01.addChild(obj.name, obj);

            obj = new Edit("edt00","124","38","246","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.div01_01.addChild(obj.name, obj);

            obj = new Edit("edt01","498","38","246","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("16");
            obj.set_cssclass("edi_WF_Search");
            this.div01_01.addChild(obj.name, obj);

            obj = new Edit("edt02","498","5","246","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("17");
            obj.set_cssclass("essential");
            this.div01_01.addChild(obj.name, obj);

            obj = new Combo("cbo01","124","71","60","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            this.div01_01.addChild(obj.name, obj);

            obj = new Edit("edt03","196","71","60","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("19");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div01_01.addChild(obj.name, obj);

            obj = new Edit("edt04","268","71","60","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("20");
            obj.set_value("5678");
            obj.set_text("5678");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta00","184","71","12","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta01","256","71","12","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("22");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_01.addChild(obj.name, obj);

            obj = new Button("btn02","342","38","28","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01_01.addChild(obj.name, obj);

            obj = new Button("btn00","716","38","28","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_EdiSch");
            this.div01_01.addChild(obj.name, obj);

            obj = new Edit("edt05","872","5","246","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("25");
            this.div01_01.addChild(obj.name, obj);

            obj = new Radio("rdo00","872","38","141","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_01_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_01_form_rdo00_innerdataset", obj);
            div01_01_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_01_form_rdo00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_01.addChild(obj.name, obj);

            obj = new CheckBox("chk00","872","71","150","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("27");
            obj.set_text("사용");
            obj.set_value("true");
            this.div01_01.addChild(obj.name, obj);

            obj = new Calendar("cal00","1246","5","246","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("28");
            this.div01_01.addChild(obj.name, obj);

            obj = new Button("btn01","1452","38","40","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("29");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.div01_01.addChild(obj.name, obj);

            obj = new Spin("spn00","1246","71","246","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("30");
            this.div01_01.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","1246","38","203","24",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("31");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","99",null,"34","0",null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("33");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_01.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","124","104",null,"24","5",null,null,null,null,null,this.div01_01.form);
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_taborder("34");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("Static08_00","0","99","120","34",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("32");
            obj.set_text("건의사항");
            obj.set_cssclass("sta_WF_Label");
            this.div01_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_00.form
            obj = new Layout("default","",0,0,this.div01_00.form,function(p){});
            this.div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_01.form
            obj = new Layout("default","",0,0,this.div01_01.form,function(p){});
            this.div01_01.form.addLayout(obj.name, obj);

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
            this.div01.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01.form.btn00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_01.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_01.form.btn00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("Detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
