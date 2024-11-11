(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            this.set_cssclass("frm_LF_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(363,910);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">템플릿</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"data\">Single-Detail</Col><Col id=\"lev\">1</Col><Col id=\"id\">Temp01</Col><Col id=\"url\">design::template/Temp01.xfdl</Col></Row><Row><Col id=\"data\">List-Detail 01</Col><Col id=\"lev\">1</Col><Col id=\"id\">Temp02</Col><Col id=\"url\">design::template/Temp02.xfdl</Col></Row><Row><Col id=\"data\">List-Detail 02</Col><Col id=\"lev\">2</Col><Col id=\"id\">Temp03</Col><Col id=\"url\">design::template/Temp03.xfdl</Col></Row><Row><Col id=\"data\">Master-Detail 01Master-Detail 01Master-Detail 01Master-Detail 01</Col><Col id=\"id\">Temp04</Col><Col id=\"url\">design::template/Temp04.xfdl</Col><Col id=\"lev\">3</Col></Row><Row><Col id=\"data\">Master-Detail 02</Col><Col id=\"id\">Temp05</Col><Col id=\"url\">design::template/Temp05.xfdl</Col><Col id=\"lev\">3</Col></Row><Row><Col id=\"data\">Shuttle</Col><Col id=\"id\">Temp06</Col><Col id=\"url\">design::template/Temp06.xfdl</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">Tab</Col><Col id=\"id\">Temp07</Col><Col id=\"url\">design::template/Temp07.xfdl</Col><Col id=\"lev\">3</Col></Row><Row><Col id=\"data\">Popup</Col><Col id=\"id\">Temp08</Col><Col id=\"url\">design::template/Temp08.xfdl</Col><Col id=\"lev\">3</Col></Row><Row><Col id=\"data\">두번째메뉴</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"data\">세번째뎁스메뉴</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"data\">세번째뎁스메뉴영역</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"data\">두번째뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">세번째뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">세번째뎁스메뉴영역</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"data\">두번째뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">세번째뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">세번째뎁스메뉴영역</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fav", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">Temp01</Col><Col id=\"data\">즐겨찾기메뉴</Col></Row><Row><Col id=\"id\">Temp02</Col><Col id=\"data\">즐겨찾기메뉴</Col></Row><Row><Col id=\"id\">Temp03</Col><Col id=\"data\">즐겨찾기메뉴</Col></Row><Row><Col id=\"id\">Temp04</Col><Col id=\"data\">즐겨찾기메뉴</Col></Row><Row><Col id=\"id\">Temp05</Col><Col id=\"data\">즐겨찾기메뉴</Col></Row><Row><Col id=\"id\">Temp06</Col><Col id=\"data\">즐겨찾기메뉴</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sch", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">&lt;fc v=&apos;red&apos;&gt;가나&lt;/fc&gt;다라</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">가나다라</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">가나다라</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">가나다라</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">가나다라마</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">가나다라마</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">가나다라마</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">가나다라마</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">가나다라마</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","58",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LF_Bg");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_01","0","0","58","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.set_cssclass("btn_LF_Menu01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_02","0","84","58","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("편성");
            obj.set_cssclass("btn_LF_Menu02S");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_03","0","168","58","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("운영");
            obj.set_cssclass("btn_LF_Menu03");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_04","0","252","58","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("관리");
            obj.set_cssclass("btn_LF_Menu04");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_05","0","336","58","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("북마크");
            obj.set_cssclass("btn_LF_Menu05");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","14",null,"28","24",null,"71",null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_LF_Set");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","14",null,"28","24",null,"25",null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_LF_Logout");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","83","12","255","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("edi_LF_Sch");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","295","14","30","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_LF_Sch");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","83","52",null,null,"25","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds_menu");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("true");
            obj.set_treeinitstatus("expand,all");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"199\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lev\" cssclass=\"cell_LF_Lev2\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","393","52","255",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_fav");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("true");
            obj.set_treeinitstatus("expand,all");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_treeusebutton("use");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"199\"/><Column size=\"48\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lev\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"cell_LF_Delete\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","713","43","255","200",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_LF_Sch");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_sch");
            obj.set_cssclass("grd_LF_Sch");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column1\" tooltiptext=\"bind:Column1\" displaytype=\"decoratetext\" edittype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",363,910,this,function(p){});
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
            this.Div00.form.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00_00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.PopupDiv00.form.Grid00.addEventHandler("oncellclick",this.pdvOpenMenu_grdOpenMenu_oncellclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
