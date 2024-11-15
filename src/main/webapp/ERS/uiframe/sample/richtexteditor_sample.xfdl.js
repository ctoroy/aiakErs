(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RichTextEditorSample");
            this.set_titletext("New Form");
            this.getSetter("classname").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_images", this);
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"selected\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"selected\">Y</Col><Col id=\"filename\">birthday.jpg</Col><Col id=\"savefilename\">birthday.jpg</Col><Col id=\"filesize\">14168</Col></Row><Row><Col id=\"filename\">ChristmasTree.jpg</Col><Col id=\"savefilename\">ChristmasTree.jpg</Col><Col id=\"filesize\">12215</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filetype\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"tranfilesize\" type=\"INT\" size=\"256\"/><Column id=\"prog\" type=\"INT\" size=\"256\"/><Column id=\"rmimg\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"filekey\" type=\"STRING\" size=\"256\"/><Column id=\"downcnt\" type=\"STRING\" size=\"256\"/><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_upload", this);
            obj.set_enableevent("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delFiles", this);
            obj._setContents("<ColumnInfo><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_editor","12","38",null,null,"8","64",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_async("false");
            obj.set_url("richtexteditor::richtexteditor.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_load",null,"7","96","26","116",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Load Data");
            this.addChild(obj.name, obj);

            obj = new Button("btn_preview",null,"7","96","26","8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Preview");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_editor
            obj = new Layout("default","",0,0,this.div_editor.form,function(p){});
            this.div_editor.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","richtexteditor::richtexteditor.xfdl");
        };
        
        // User Script
        this.registerScript("richtexteditor_sample.xfdl", function() {
        //include "lib::lib_base.xjs";
        this.fvUrl = "http://localhost:8080/uiadapter/ERS/";

        this.RichTextEditorSample_onload = function(obj,e)
        {
        	var userConfig = {
        		editor : {
        			loadCallback : this.onloadEditor,
        			resizeCallback : this.onresizeEditor
        		},
        		image : {
        			loadCallback : this.onloadImage,
        			removeCallback : this.onremoveImage
        		}
        	};
        	this.div_editor.form.initialize(userConfig, obj);
        };

        // editor loading 이 완료되었을 때
        this.onloadEditor = function(obj)
        {
            // obj 는 this.div_editor 임.
        };

        // editor resize 가 발생할 때
        this.onresizeEditor = function(obj, e)
        {
        	// obj 는 this.div_editor 이고 e 는 nexacro.SizeEventInfo 임.
        };

        // editor image (up/down) loading 이 완료되었을 때
        this.onloadImage = function(type, errorcode, errormsg, dataset)
        {
        	// - upload 는 본문에 이미지가 추가될 때 마다 실시간으로 서버에 저장된 후 호출됨.
        	// - dataset 은 실제 업로드된 파일 정보를 담은 Dataset reference
        	if(type == "upload")
        	{
        		var row = -1;
        		var cnt = dataset.rowcount;
        		this.ds_images.set_enableevent(false);
        		for(var i = 0; i < cnt; i++)
        		{
        			row = this.ds_images.addRow();
        			this.ds_images.setColumn(row, "filename", dataset.getColumn(i, "filename"));
        			this.ds_images.setColumn(row, "savefilename", dataset.getColumn(i, "savefilename"));
        			this.ds_images.setColumn(row, "filesize", dataset.getColumn(i, "filesize"));
        		}
        		this.ds_images.set_enableevent(true);
        	}
        };

        // editor image 삭제가 완료되었을 때
        this.onremoveImage = function(errorcode, errormsg, dataset)
        {
        	// - 실제 서버에서 삭제된 후 호출됨.
        	// - dataset 은 삭제한 파일 정보를 담은 Dataset reference
        	var row = -1;
        	var cnt = dataset.rowcount;
        	this.ds_images.set_enableevent(false);
        	for(var i = 0; i < cnt; i++)
        	{
        		row = this.ds_images.findRow("savefilename", dataset.getColumn(i, "savefilename"));
        		if(row > -1)
        		{
        			this.ds_images.deleteRow(row);
        		}
        	}
        	this.ds_images.set_enableevent(true);
        };

        // 데이터 로드
        this.btn_load_onclick = function(obj,e)
        {
        	// 컨텐츠에 포함된 테스트 이미지 경로 지정
        	var image1 = this.fvUrl + "richtexteditorLib/richtexteditor/repository/birthday.jpg";
        	var image2 = this.fvUrl + "richtexteditorLib/richtexteditor/repository/ChristmasTree.jpg";

        	var contents = "<div>This is a <font color=\"#ff8000\" size=\"5\">Rich Text Editor </font>created in a nexacro platform.</div><div><div>Let's create a schedule !!</div><div><font size=\"6\">12 </font><font size=\"2\"><span style=\"line-height: 19.5px;\">2014 DECEMBER</span></font></div><div><table style=\"border: currentColor; font-family: Verdana, malgun gothic; font-size: 10pt; border-collapse: collapse;\" border=\"0\" cellSpacing=\"0\" cellPadding=\"0\" width=\"690\"><tbody><tr><td style=\"border-width: 1px; border-style: solid none solid solid; border-color: rgb(147, 165, 186) rgb(36, 98, 175) rgb(147, 165, 186) rgb(147, 165, 186); padding: 3px 4px 2px; width: 98px; height: 24px; background-color: rgb(232, 236, 240);\"><p><font color=\"#ff0000\"><b>sun</b></font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>mon</b></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>tue</b></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>wed</b></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>thu</b></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>fri</b></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>sat</b></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: middle; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p style=\"text-align: left;\"><font face=\"Arial Black\">1</font><font face=\"Arial Black\"><br></font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">2</font></p><p><font face=\"Arial Black\"><br></font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">3</font></p><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">4</font></p><p><font face=\"Arial Black\"><br></font></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">5</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">6</font></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\"><p><font color=\"#ff0000\" face=\"Arial Black\">7</font></p><p><font color=\"#ff0000\" face=\"Arial Black\"></font>&nbsp;</p><p><font color=\"#ff0000\" face=\"Arial Black\"></font>&nbsp;</p><p><font color=\"#ff0000\" face=\"Arial Black\"></font>&nbsp;</p><p><font color=\"#ff0000\" face=\"Arial Black\"></font>&nbsp;</p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">8</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">9</font></p><p style='font-family: \"Arial Black\";'><p><img style=\"width: 70px; height: 47px;\" id=\"Div_7eeeb85f-a392-3307-b3f6-38942616bef9\" src=\""+image2+"\" width=\"200\" height=\"133\"></p><p id=\"Div_7eeeb85f-a392-3307-b3f6-38942616bef9_focus\"><font face=\"Verdana\">birthday !!</font></p></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">10</font></p><p><font face=\"Arial Black\"><br></font></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">11</font></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">12</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">13</font></p><p><font face=\"Verdana\">CSR</font></p><p><font face=\"Verdana\">(AM 9:00 ~)</font></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\"><p><font color=\"#ff0000\" face=\"Arial Black\">14</font></p><font color=\"#ff0000\" face=\"Arial Black\"><p><br>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></font></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">15</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">16</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">17</font></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">18</font></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">19</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">20</font></p><p><font face=\"Verdana\">Year end party</font></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\"><p><font color=\"#ff0000\" face=\"Arial Black\">21</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">22</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">23</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">24</font></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 24px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font color=\"#ff0000\" face=\"Arial Black\">25</font></p><p><font color=\"#ff0000\" face=\"Arial Black\"><p><img style=\"width: 50px; height: 50px;\" id=\"Div_552854ed-48c5-1648-b795-38926acb0bed\" src=\""+image1+"\" width=\"280\" height=\"280\"></p><p id=\"Div_552854ed-48c5-1648-b795-38926acb0bed_focus\"><font color=\"#000000\" face=\"Verdana\">X-mas party</font></p></font></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">26</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">27</font></p><p>Hiking</p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 96px; height: 78px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\" rowSpan=\"2\" colSpan=\"1\"><p><font color=\"#ff0000\" face=\"Arial Black\">28</font></p><p><font face=\"Verdana\">HJ's Wedding ceremony</font></p><p>&nbsp;</p><p>&nbsp;</p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 53px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 128);\"><p><font face=\"Arial Black\">29</font></p><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 53px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 128);\"><p><font face=\"Arial Black\">30</font></p><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 53px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 128);\"><p><font face=\"Arial Black\">31</font></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 78px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\" rowSpan=\"2\" colSpan=\"1\"><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 78px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\" rowSpan=\"2\" colSpan=\"1\"><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 78px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\" rowSpan=\"2\" colSpan=\"1\"><p><br></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 297px; height: 1px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 128);\" rowSpan=\"1\" colSpan=\"3\"><p><span style=\"font-family: Verdana;\"><a href=\"https://www.google.co.kr/maps/@39.3789984,21.2065119,7z\" target=\"_blank\"></a><a href=\"https://www.google.co.kr/maps/place/%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84/@33.3613101,126.5504608,11z/data=!4m2!3m1!1s0x350ce3544cc84045:0x66bc36d2981ebf31\" target=\"_blank\">vacation</a></span></p></td></tr></tbody></table><p><br></p><br></div></div>";

        	// 컨텐츠 지정
        	this.div_editor.form.setContent(contents);

        	/*
        		기 등록된 본문이미지 정보를 지정한다.
        		- fileName : 원본 파일명
        		- saveFileName : 저정된 파일명
        		- fileSize : 파일 사이즈
        		- selected : 대표 이미지 여부 (true/false)
        	*/
        	var attachInfo = [];

        	for(var i = 0, len = this.ds_images.rowcount; i < len; i++)
        	{
        		var info = {
        			"fileName": this.ds_images.getColumn(i, "filename"),
        			"saveFileName": this.ds_images.getColumn(i, "savefilename"),
        			"fileSize": this.ds_images.getColumn(i, "filesize")
        		};

        		if(this.ds_images.getColumn(i, "selected") == "Y")
        		{
        			info.selected = true;
        		}

        		attachInfo.push(info);
        	}

        	this.div_editor.form.setAttachImages(attachInfo);
        };

        // preview
        this.btn_preview_onclick = function(obj,e)
        {
        	var content = this.div_editor.form.getContent();

        	var option ={'titlebar': true, 'width': 800, 'height':710, 'resize': true};

        	this.gfnOpenPopup("preview", "sample::richtexteditor_previewsample.xfdl", {'content': content},"", option);

        // 	if(this.gfnIsEmpty(content))
        // 	{
        // 		alert("미리보기 내용이 없습니다.");
        // 		return;
        // 	}
        //
        // 	var child = new ChildFrame();
        // 	child.init("preview", 0, 0, 800, 630);
        // 	child.set_formurl("sample::richtexteditor_previewsample.xfdl");
        // 	child.set_openalign("center middle");
        //
        // 	var arg = {
        // 		'content': content
        // 	}
        // 	child.showModal(this.getOwnerFrame(), arg);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.RichTextEditorSample_onload,this);
            this.btn_load.addEventHandler("onclick",this.btn_load_onclick,this);
            this.btn_preview.addEventHandler("onclick",this.btn_preview_onclick,this);
        };
        this.loadIncludeScript("richtexteditor_sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
