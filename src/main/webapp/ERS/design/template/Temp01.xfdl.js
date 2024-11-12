(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01");
            this.set_titletext("Single-Detail");
            if (Form == this.constructor)
            {
                this._setFormPosition(1527,828);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Edi\" type=\"STRING\" size=\"256\"/><Column id=\"Essential\" type=\"STRING\" size=\"256\"/><Column id=\"Num\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Cmb\" type=\"STRING\" size=\"256\"/><Column id=\"Cal\" type=\"STRING\" size=\"256\"/><Column id=\"CenterAlign\" type=\"STRING\" size=\"256\"/><Column id=\"Btn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">01</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">02</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">03</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">04</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">05</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">06</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">07</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">08</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">09</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta04_00",null,"0","30",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W30");
            this.addChild(obj.name, obj);

            obj = new Div("div01_00","0","96",null,null,"30","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","396",null,null,"0","0",null,null,null,null,this.div01_00.form);
            obj.set_taborder("22");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

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

            obj = new Static("sta07","0","66",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("4");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08","0","66","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("5");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta10","748","0","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("6");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12","748","33","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("7");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta17","748","66","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("8");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00","124","5","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00","124","38","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("edt_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo01","124","71","75","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt03","210","71","80","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("12");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt04","300","71","72","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("13");
            obj.set_value("5678");
            obj.set_text("5678");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta00","197","71","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("14");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta01","288","71","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("15");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn02","342","38","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05","872","5","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("17");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rdo00","872","38","211","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("18");
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

            obj = new CheckBox("chk00","872","71","150","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("19");
            obj.set_text("사용");
            obj.set_value("true");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","396","120",null,null,"0",null,null,null,null,this.div01_00.form);
            obj.set_taborder("20");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new TextArea("txa00","124","401",null,null,"5","5",null,null,null,null,this.div01_00.form);
            obj.set_taborder("21");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","132",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("23");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","99",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("24");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","99","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("25");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05_00","0","132","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("26");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta07_01","0","165",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("27");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_01","0","165","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("28");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta09_00","374","99","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("29");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_LabelEssential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta10_00","748","99","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("30");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_LabelEssential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta11_00","1122","99","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("31");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12_00","748","132","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("32");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_LabelEssential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta13_00","1122","132","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("33");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta14_00","374","132","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("34");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta15_00","1122","165","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("35");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta17_00","748","165","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("36");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_LabelEssential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00","124","104","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("37");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","124","137","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("38");
            obj.set_enable("false");
            obj.set_cssclass("edt_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt01_00","498","137","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("39");
            obj.set_cssclass("edt_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00","498","104","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("40");
            obj.set_cssclass("essential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo01_00","124","170","75","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("41");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt03_00","210","170","80","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("42");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt04_00","300","170","72","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("43");
            obj.set_value("5678");
            obj.set_text("5678");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta00_00","197","170","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("44");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta01_00","288","170","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("45");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn02_00","342","137","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn00_00","716","137","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_EdiSch");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05_00","872","104","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("48");
            obj.set_cssclass("essential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rdo00_00","872","137","211","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("49");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_cssclass("essential");
            var div01_00_form_rdo00_00_innerdataset = new nexacro.NormalDataset("div01_00_form_rdo00_00_innerdataset", obj);
            div01_00_form_rdo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rdo00_00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00","872","170","150","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("50");
            obj.set_text("사용");
            obj.set_cssclass("essential");
            obj.set_value("true");
            this.div01_00.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","1246","104","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn01_00","1452","137","40","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("52");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.div01_00.addChild(obj.name, obj);

            obj = new Spin("spn00_00","1246","170","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("53");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06_01","0","231",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("54");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta03_01","0","198",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("55");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta02_01","0","198","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("56");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05_01","0","231","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("57");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta07_02","0","264",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("58");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_02","0","264","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("59");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta10_01","748","198","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("60");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12_01","748","231","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("61");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta17_01","748","264","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("62");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_01","124","203","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("63");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_01","124","236","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("64");
            obj.set_enable("false");
            obj.set_cssclass("edt_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo01_01","124","269","75","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("65");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt03_01","210","269","80","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("66");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt04_01","300","269","72","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("67");
            obj.set_value("5678");
            obj.set_text("5678");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta00_01","197","269","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("68");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta01_01","288","269","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("69");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn02_01","342","236","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("70");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05_01","872","203","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("71");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rdo00_01","872","236","211","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("72");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_00_form_rdo00_01_innerdataset = new nexacro.NormalDataset("div01_00_form_rdo00_01_innerdataset", obj);
            div01_00_form_rdo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rdo00_01_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk00_01","872","269","150","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("73");
            obj.set_text("사용");
            obj.set_value("true");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06_00_00","0","330",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("74");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta03_00_00","0","297",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("75");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","0","297","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("76");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05_00_00","0","330","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("77");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta07_01_00","0","363",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("78");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_01_00","0","363","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("79");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta09_00_00","374","297","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("80");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_LabelEssential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta10_00_00","748","297","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("81");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta11_00_00","1122","297","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("82");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12_00_00","748","330","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("83");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta13_00_00","1122","330","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("84");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta14_00_00","374","330","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("85");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta15_00_00","1122","363","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("86");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta17_00_00","748","363","120","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("87");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00","124","302","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("88");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","124","335","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("89");
            obj.set_enable("false");
            obj.set_cssclass("edt_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt01_00_00","498","335","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("90");
            obj.set_cssclass("edt_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","498","302","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("91");
            obj.set_cssclass("essential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo01_00_00","124","368","75","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("92");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt03_00_00","210","368","80","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("93");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt04_00_00","300","368","72","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("94");
            obj.set_value("5678");
            obj.set_text("5678");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","197","368","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("95");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","288","368","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("96");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn02_00_00","342","335","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("97");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","716","335","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("98");
            obj.set_cssclass("btn_WF_EdiSch");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05_00_00","872","302","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("99");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00","872","335","211","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("100");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_00_form_rdo00_00_00_innerdataset = new nexacro.NormalDataset("div01_00_form_rdo00_00_00_innerdataset", obj);
            div01_00_form_rdo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rdo00_00_00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00_00","872","368","150","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("101");
            obj.set_text("사용");
            obj.set_value("true");
            this.div01_00.addChild(obj.name, obj);

            obj = new Calendar("cal00_00_00","1246","302","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("102");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn01_00_00","1452","335","40","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("103");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.div01_00.addChild(obj.name, obj);

            obj = new Spin("spn00_00_00","1246","368","246","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("104");
            this.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","1246","137","203","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("105");
            this.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00","1246","335","203","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("106");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta00","0","58","342","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","140","50","30","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H46");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01","0","50","90","8",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H8");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("5");
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
            // Layout Functions
            //-- Default Layout : this.div01_00.form
            obj = new Layout("default","",0,0,this.div01_00.form,function(p){});
            this.div01_00.form.addLayout(obj.name, obj);

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
        this.registerScript("Temp01.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	Temp01.xfdl
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
            this.div01_00.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn02_00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn00_00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn02_01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn02_00_00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn00_00_00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.divSearch.form.calM.addEventHandler("ondropdown",this.calM_ondropdown,this);
            this.divSearch.form.calM.addEventHandler("oneditclick",this.calM_oneditclick,this);
        };
        this.loadIncludeScript("Temp01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
