(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #646982")
            					}
            				}
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            							}
            						}
            					},
            					"datepicker" :
            					{
            						"parent" :
            						{
            							"datepickergroup" :
            							{
            								"parent" :
            								{
            									"DateRangePicker" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#333333"),
            												"border" : nexacro.BorderObject("0px solid #125dae")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("0px solid #125dae")
            											}
            										}
            									},
            									"DateRangePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#333333"),
            												"border" : nexacro.BorderObject("0px solid #125dae")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("0px solid #125dae")
            											}
            										}
            									},
            									"PopupDateRangePicker" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#333333"),
            												"border" : nexacro.BorderObject("0px solid #125dae")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("0px solid #125dae")
            											}
            										}
            									}
            								}
            							},
            							"Calendar" :
            							{
            								"class" :
            								[
            									{
            										"cal_MF_Cal" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"border" : nexacro.BorderObject("0px none")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					},
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"grd_WF_Cal" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_WF_CalHead" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PreBtn.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PreBtn.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PreBtnO.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PreBtnO.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PreBtnO.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PreBtnD.png\")")
            									}
            								}
            							},
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
            													},
            													"disabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
            													},
            													"disabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
            													}
            												}
            											}
            										}
            									},
            									"Calendar" :
            									{
            										"class" :
            										[
            											{
            												"cal_MF_Cal" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_CalPrev.png\")")
            														},
            														"focused" :
            														{
            															"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_CalPrev.png\")")
            														},
            														"mouseover" :
            														{
            															"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_CalPrevO.png\")")
            														},
            														"pushed" :
            														{
            															"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_CalPrevO.png\")")
            														},
            														"selected" :
            														{
            															"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_CalPrevO.png\")")
            														},
            														"disabled" :
            														{
            															"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_CalPrev.png\")")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							}
            						}
            					},
            					"Menu" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PreBtn.png\")"),
            								"padding" : nexacro.PaddingObject("3px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PreBtn.png\")"),
            								"padding" : nexacro.PaddingObject("3px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PreBtnO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PreBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PreBtnO.png\")")
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtn.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtn.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnO.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnO.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnO.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnD.png\")")
            									}
            								}
            							},
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
            													},
            													"disabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
            													},
            													"disabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
            													}
            												}
            											}
            										}
            									},
            									"Calendar" :
            									{
            										"class" :
            										[
            											{
            												"cal_MF_Cal" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_CalNext.png\")")
            														},
            														"focused" :
            														{
            															"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_CalNext.png\")")
            														},
            														"mouseover" :
            														{
            															"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_CalNextO.png\")")
            														},
            														"pushed" :
            														{
            															"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_CalNextO.png\")")
            														},
            														"selected" :
            														{
            															"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_CalNextO.png\")")
            														},
            														"disabled" :
            														{
            															"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_CalNext.png\")")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							}
            						}
            					},
            					"Menu" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtn.png\")"),
            								"padding" : nexacro.PaddingObject("3px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtn.png\")"),
            								"padding" : nexacro.PaddingObject("3px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtnO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtnO.png\")")
            							}
            						}
            					}
            				}
            			},
            			"yearstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            									}
            								}
            							},
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
            														"color" : nexacro.ColorObject("#333333"),
            														"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
            														"color" : nexacro.ColorObject("#333333"),
            														"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
            														"color" : nexacro.ColorObject("#333333"),
            														"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            													}
            												}
            											}
            										}
            									},
            									"Calendar" :
            									{
            										"class" :
            										[
            											{
            												"cal_MF_Cal" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#0a0a0a"),
            															"font" : nexacro.FontObject("bold 16px \"Myriad Pro\"")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#666666")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#239cf0")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ee5555")
            									}
            								}
            							},
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"color" : nexacro.ColorObject("#333333")
            													},
            													"disabled" :
            													{
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"color" : nexacro.ColorObject("#333333")
            													},
            													"disabled" :
            													{
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"color" : nexacro.ColorObject("#333333")
            													},
            													"disabled" :
            													{
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"mouseover" :
            									{
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            									},
            									"day" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"today" :
            									{
            										"border" : nexacro.BorderObject("1px solid #d31145"),
            										"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#239cf0")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ee5555")
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#aaaaaa")
            									}
            								}
            							},
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"focused" :
            													{
            														"color" : nexacro.ColorObject("#333333")
            													},
            													"enabled" :
            													{
            														"color" : nexacro.ColorObject("#333333")
            													},
            													"selected" :
            													{
            														"color" : nexacro.ColorObject("#ffffff")
            													}
            												}
            											}
            										}
            									},
            									"Calendar" :
            									{
            										"class" :
            										[
            											{
            												"cal_MF_Cal" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("13px \"Myriad Pro\"")
            														},
            														"day" :
            														{
            															"color" : nexacro.ColorObject("#666666")
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#3683e2")
            														},
            														"today" :
            														{
            															"color" : nexacro.ColorObject("#3e8ded")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"deactivate" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"titleicon" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            							},
            							"deactivate" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            							}
            						}
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MinO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MinO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MinD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MaxD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_NormalO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_NormalO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_NormalD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_CloseO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_CloseO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_CloseD.png\")")
            							}
            						}
            					},
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("10px 8px")
            							},
            							"focused" :
            							{
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            							},
            							"selected" :
            							{
            							},
            							"pushed" :
            							{
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("10px 8px")
            							},
            							"focused" :
            							{
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            							},
            							"selected" :
            							{
            							},
            							"pushed" :
            							{
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("10px 8px")
            							},
            							"focused" :
            							{
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            							},
            							"selected" :
            							{
            							},
            							"pushed" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e1e2e7, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e1e2e7, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef, 0px none, 0px none, 0px none")
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Hdec.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecD.png\")")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Vdec.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecD.png\")")
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"class" :
            								[
            									{
            										"grd_LF_Menu" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									},
            									{
            										"grd_MDI_List" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									},
            									{
            										"grd_LF_Sch" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									},
            									{
            										"grd_MF_Todo" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									},
            									{
            										"grd_WF_CalMgmt" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									}
            								]
            							},
            							"ListView" :
            							{
            								"class" :
            								[
            									{
            										"lst_WF_Calview" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Hinc.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincD.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincO.png\")")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Vinc.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincD.png\")")
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"class" :
            								[
            									{
            										"grd_LF_Menu" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									},
            									{
            										"grd_MDI_List" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									},
            									{
            										"grd_LF_Sch" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									},
            									{
            										"grd_MF_Todo" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									},
            									{
            										"grd_WF_CalMgmt" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									}
            								]
            							},
            							"ListView" :
            							{
            								"class" :
            								[
            									{
            										"lst_WF_Calview" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"class" :
            								[
            									{
            										"grd_LF_Menu" :
            										{
            											"self" :
            											{
            												"focused" :
            												{
            												},
            												"mouseover" :
            												{
            												},
            												"pushed" :
            												{
            												},
            												"selected" :
            												{
            												},
            												"disabled" :
            												{
            												}
            											}
            										}
            									},
            									{
            										"grd_LF_Sch" :
            										{
            											"self" :
            											{
            												"focused" :
            												{
            												},
            												"mouseover" :
            												{
            												},
            												"pushed" :
            												{
            												},
            												"selected" :
            												{
            												},
            												"disabled" :
            												{
            												}
            											}
            										}
            									},
            									{
            										"grd_MDI_List" :
            										{
            											"self" :
            											{
            												"focused" :
            												{
            												},
            												"mouseover" :
            												{
            												},
            												"pushed" :
            												{
            												},
            												"selected" :
            												{
            												},
            												"disabled" :
            												{
            												}
            											}
            										}
            									},
            									{
            										"grd_MF_Todo" :
            										{
            											"self" :
            											{
            												"focused" :
            												{
            												},
            												"mouseover" :
            												{
            												},
            												"pushed" :
            												{
            												},
            												"selected" :
            												{
            												}
            											}
            										}
            									},
            									{
            										"grd_WF_CalMgmt" :
            										{
            											"self" :
            											{
            												"focused" :
            												{
            												},
            												"mouseover" :
            												{
            												},
            												"pushed" :
            												{
            												},
            												"selected" :
            												{
            												},
            												"disabled" :
            												{
            												}
            											}
            										}
            									}
            								]
            							},
            							"ListView" :
            							{
            								"class" :
            								[
            									{
            										"lst_WF_Calview" :
            										{
            											"self" :
            											{
            												"focused" :
            												{
            												},
            												"mouseover" :
            												{
            												},
            												"pushed" :
            												{
            												},
            												"selected" :
            												{
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #e1e2e7"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #e1e2e7"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #efefef")
            					}
            				}
            			},
            			"Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#000000"),
            						"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            					},
            					"contents" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"frm_LF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"frm_WF_Popup" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #4f5860")
            								}
            							}
            						}
            					},
            					{
            						"frm_POP_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"ChildFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"FrameSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"VFrameSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"HFrameSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"TileFrameSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ebeced"),
            						"padding" : nexacro.PaddingObject("0px 7px 0px 7px"),
            						"color" : nexacro.ColorObject("#293139"),
            						"letterSpacing" : nexacro.CSSValueObject("-1px"),
            						"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"disabled" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_TF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_MenuS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 1px solid #e1e2e7, 0px none")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 1px solid #e1e2e7, 0px none")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 1px solid #f4f5f9, 0px none")
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 1px solid #f4f5f9, 0px none")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 1px solid #f4f5f9, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Open" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 1px solid #e1e2e7, 0px none")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 1px solid #e1e2e7, 0px none")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Home" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Home.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Home.png\")"),
            									"iconPosition" : "left"
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Home.png\")"),
            									"iconPosition" : "left"
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_HomeS.png\")"),
            									"iconPosition" : "left"
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_HomeS.png\")"),
            									"iconPosition" : "left"
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_HomeS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_HomeS.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_HomeS.png\")"),
            									"iconPosition" : "left"
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_HomeS.png\")"),
            									"iconPosition" : "left"
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_HomeS.png\")"),
            									"iconPosition" : "left"
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_HomeS.png\")"),
            									"iconPosition" : "left"
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_CloseAll" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_CloseAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_CloseAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_CloseAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_CloseAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_CloseAll.png\")"),
            									"iconPosition" : "left"
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_List" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_List.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_List.png\")"),
            									"iconPosition" : "left"
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_List.png\")"),
            									"iconPosition" : "left"
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_List.png\")"),
            									"iconPosition" : "left"
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_List.png\")"),
            									"iconPosition" : "left"
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Left" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Pre.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Pre.png\")"),
            									"iconPosition" : "left"
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Pre.png\")"),
            									"iconPosition" : "left"
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Pre.png\")"),
            									"iconPosition" : "left"
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Pre.png\")"),
            									"iconPosition" : "left"
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Right" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Next.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Next.png\")"),
            									"iconPosition" : "left"
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Next.png\")"),
            									"iconPosition" : "left"
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Next.png\")"),
            									"iconPosition" : "left"
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Next.png\")"),
            									"iconPosition" : "left"
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_TabClose" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Close" :
            						{
            							"self" :
            							{
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Open" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu01.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu01.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu01.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu01.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu01.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu01S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu01.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu01.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu01.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu01.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu01.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu02.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu02.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu02.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu02.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu02.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu02S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu02.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu02.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu02.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu02.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu02.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu03.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu03.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu03.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu03.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu03.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu03S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu03.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu03.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu03.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu03.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu03.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu04" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu04.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu04.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu04.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu04.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu04.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu04S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu04.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu04.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu04.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu04.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu04.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu05" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu05.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu05.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu05.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu05.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu05.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu05S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu05.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu05.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu05.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu05.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu05.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu06" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu06.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu06.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu06.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu06.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu06.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu06S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu06.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu06.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu06.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu06.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu06.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu07" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu07.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu07.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu07.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu07.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu07.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu07S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu07.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu07.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu07.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu07.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Menu07.png\")"),
            									"iconPosition" : "top",
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("11px 0px 0px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Set" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Logout" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Sch" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Edit" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b0b5c6"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#596382"),
            									"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b0b5c6"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#596382"),
            									"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Cancel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b0b5c6"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#596382"),
            									"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b0b5c6"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#596382"),
            									"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Save" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #23273c"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #23273c"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Up" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b0b5c6"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b0b5c6"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Down" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b0b5c6"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b0b5c6"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_More" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_New" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Restore" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Quick01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 1px solid #e6e8ef, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 35px 0px"),
            									"color" : nexacro.ColorObject("#181818"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 1px solid #e6e8ef, 0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 1px solid #e6e8ef, 0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 1px solid #e6e8ef, 0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 1px solid #e6e8ef, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Quick02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 1px solid #e6e8ef, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 35px 0px"),
            									"color" : nexacro.ColorObject("#181818"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 1px solid #e6e8ef, 0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 1px solid #e6e8ef, 0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 1px solid #e6e8ef, 0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 1px solid #e6e8ef, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Quick03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #e6e8ef, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 35px 0px"),
            									"color" : nexacro.ColorObject("#181818"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #e6e8ef, 0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #e6e8ef, 0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #e6e8ef, 0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #e6e8ef, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Quick04" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 0px none, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 35px 0px"),
            									"color" : nexacro.ColorObject("#181818"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 0px none, 0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 0px none, 0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 0px none, 0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 0px none, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Quick05" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 0px none, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 35px 0px"),
            									"color" : nexacro.ColorObject("#181818"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 0px none, 0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 0px none, 0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 0px none, 0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #e6e8ef, 0px none, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Quick06" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 35px 0px"),
            									"color" : nexacro.ColorObject("#181818"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalLeft" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalRight" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Crud" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145"),
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145"),
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #B5B4B3"),
            									"color" : nexacro.ColorObject("#B5B4B3")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Custom" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145"),
            									"padding" : nexacro.PaddingObject("0px 7px 0px 7px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145"),
            									"padding" : nexacro.PaddingObject("0px 7px 0px 7px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Popup" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145"),
            									"padding" : nexacro.PaddingObject("0px 7px 0px 7px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145"),
            									"padding" : nexacro.PaddingObject("0px 7px 0px 7px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Popup02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145"),
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145"),
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d31145")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #B5B4B3"),
            									"color" : nexacro.ColorObject("#B5B4B3")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Srh.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Srh.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Detail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            									"color" : nexacro.ColorObject("#666666"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            									"color" : nexacro.ColorObject("#666666"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_EdiSch" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_SchSmall" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c8cdd7"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c8cdd7"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #313340")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #313340")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #313340")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Module" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #9fa5b8"),
            									"padding" : nexacro.PaddingObject("0px 7px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #9fa5b8"),
            									"padding" : nexacro.PaddingObject("0px 7px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #9fa5b8"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #9fa5b8"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #9fa5b8"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Add" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Delete" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Delete.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Delete.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Copy" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Copy.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Copy.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cancel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Cancel.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Cancel.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Data" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Data.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Data.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GridClose" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_GridClose.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_GridClose.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GridOpen" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_GridOpen.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_GridOpen.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_RowUp" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_RowUp.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_RowUp.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_RowDown" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_RowDown.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_RowDown.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PopUp" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_PopUp.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_PopUp.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Select" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Select.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Select.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ExcelUp" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ExcelDown" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Bookmark" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_BookmarkS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Open" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_OpenS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Reload" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ReloadS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Save" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_SaveS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Up" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Down" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Left" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Right" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PageL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PageR" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PageP" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PageN" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Page" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#666666"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Bold\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ee5555"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ee5555"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ee5555"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ee5555"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PageS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ee5555"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ee5555"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ee5555"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ee5555"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ee5555"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#293139"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#293139"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalMonth" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cb1d4a"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#293139"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cb1d4a"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#293139"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cb1d4a"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#293139"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cb1d4a"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#293139"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cb1d4a"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#293139"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal01" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal02" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal03" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal04" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal05" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal06" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal07" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal08" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal09" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal10" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal11" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cal12" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Light" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Light.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#858eb0")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Light.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#858eb0")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_LightS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_LightS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_LightS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_LightS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_LightS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_LightS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_LightS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_LightS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Dark" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Dark.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#858eb0")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Dark.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#858eb0")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DarkS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DarkS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_DarkS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DarkS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DarkS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DarkS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DarkS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DarkS.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Tab" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"color" : nexacro.ColorObject("#858eb0")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"color" : nexacro.ColorObject("#858eb0")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_TabS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a8afc9"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Drop" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Sch" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #313340")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #313340")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #313340")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PreBtn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_NxtBtn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_LOGIN_Start" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 16px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LOGIN_Pw" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#666666"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalRefresh" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcdde4"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_CalRefresh.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 2px"),
            									"color" : nexacro.ColorObject("#8c91a2"),
            									"font" : nexacro.FontObject("14px bold \"SpoqaHanSansNeo-Regular\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcdde4"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_CalRefresh.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 2px"),
            									"color" : nexacro.ColorObject("#8c91a2"),
            									"font" : nexacro.FontObject("14px bold \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8c91a2")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8c91a2")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalToday" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcdde4"),
            									"color" : nexacro.ColorObject("#8c91a2"),
            									"font" : nexacro.FontObject("14px bold \"SpoqaHanSansNeo-Regular\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcdde4"),
            									"color" : nexacro.ColorObject("#8c91a2"),
            									"font" : nexacro.FontObject("14px bold \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8c91a2")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8c91a2")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalClose" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcdde4"),
            									"color" : nexacro.ColorObject("#8c91a2"),
            									"font" : nexacro.FontObject("14px bold \"SpoqaHanSansNeo-Regular\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcdde4"),
            									"color" : nexacro.ColorObject("#8c91a2"),
            									"font" : nexacro.FontObject("14px bold \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8c91a2")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8c91a2")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalOpen" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcdde4"),
            									"color" : nexacro.ColorObject("#8c91a2"),
            									"font" : nexacro.FontObject("14px bold \"SpoqaHanSansNeo-Regular\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcdde4"),
            									"color" : nexacro.ColorObject("#8c91a2"),
            									"font" : nexacro.FontObject("14px bold \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8c91a2")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8c91a2")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px none"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px none"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px none"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px none"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalYearPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px none"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px none"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalYearNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px none"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px none"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					}
            				]
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dcd5cf")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				},
            				"class" :
            				[
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcd5cf")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcd5cf")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"error" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								}
            							}
            						}
            					},
            					{
            						"cal_MF_Cal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"CalendarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dcd5cf")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				}
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtn.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnD.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtn.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnD.png\")")
            							}
            						}
            					},
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropD.png\")")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropD.png\")")
            							}
            						}
            					},
            					"MultiCombo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"MultiComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"box" :
            					{
            						"parent" :
            						{
            							"DateField" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									},
            									"invalid" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									},
            									"valid" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtn.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtn.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            					},
            					"focused" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxO.png\")")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxSO.png\")")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxS.png\")")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxD.png\")")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxDS.png\")")
            					}
            				},
            				"class" :
            				[
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxES.png\")"),
            									"color" : nexacro.ColorObject("#d31145")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxES.png\")"),
            									"color" : nexacro.ColorObject("#d31145")
            								},
            								"readonly" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxES.png\")"),
            									"color" : nexacro.ColorObject("#d31145")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxES.png\")"),
            									"color" : nexacro.ColorObject("#d31145")
            								},
            								"mouseover_selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxSES.png\")"),
            									"color" : nexacro.ColorObject("#d31145")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxSES.png\")"),
            									"color" : nexacro.ColorObject("#d31145")
            								}
            							}
            						}
            					},
            					{
            						"chk_LOGIN_Id" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#666666")
            								}
            							}
            						}
            					}
            				]
            			},
            			"CheckBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            					},
            					"focused" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxO.png\")")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxSO.png\")")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxS.png\")")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxD.png\")")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxDS.png\")")
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dcd5cf")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef")
            					}
            				},
            				"class" :
            				[
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcd5cf")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"error" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								}
            							}
            						}
            					},
            					{
            						"cbo_WF_Cal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"cbo_LOGIN_Input" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"ComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dcd5cf")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef")
            					}
            				}
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#aeaeae")
            							},
            							"nulltext" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						},
            						"class" :
            						[
            							{
            								"cbo_WF_Cal" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            										}
            									}
            								}
            							},
            							{
            								"cbo_LOGIN_Input" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										}
            									}
            								}
            							}
            						]
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#aeaeae")
            							},
            							"nulltext" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #646982")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #646982")
            							}
            						}
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"combolist" :
            					{
            						"parent" :
            						{
            							"Combo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("4px 0px 4px 8px"),
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"mouseover" :
            									{
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									}
            								}
            							},
            							"ComboControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("4px 0px 4px 8px"),
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"mouseover" :
            									{
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									}
            								}
            							}
            						}
            					},
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("4px 0px 4px 10px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("4px 0px 4px 10px")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("4px 0px 4px 10px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dcd5cf"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aeaeae")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				},
            				"class" :
            				[
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcd5cf")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"edt_WF_SearchEssential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcd5cf"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px")
            								},
            								"readonly" :
            								{
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#aaaaaa")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"color" : nexacro.ColorObject("#aaaaaa")
            								}
            							}
            						}
            					},
            					{
            						"output" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"error" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								}
            							}
            						}
            					},
            					{
            						"edi_LF_Sch" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 45px 0px 17px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 45px 0px 17px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 45px 0px 17px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 45px 0px 17px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#6b6c74")
            								}
            							}
            						}
            					},
            					{
            						"edt_WF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcd5cf"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #adb1b5")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #adb1b5")
            								},
            								"readonly" :
            								{
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#aaaaaa")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"color" : nexacro.ColorObject("#aaaaaa")
            								}
            							}
            						}
            					},
            					{
            						"edt_WF_Cbo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("0px 28px 0px 8px")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("0px 28px 0px 8px")
            								}
            							}
            						}
            					},
            					{
            						"edt_WF_Read" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("0px 28px 0px 8px")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("0px 28px 0px 8px")
            								}
            							}
            						}
            					},
            					{
            						"edt_LOGIN_Input" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"EditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dcd5cf"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aeaeae")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				}
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            					},
            					"mouseover" :
            					{
            					},
            					"pushed" :
            					{
            					},
            					"focused" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"FileUpload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"fileuploaditem" :
            			{
            				"parent" :
            				{
            					"FileUpload" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									},
            									"focused" :
            									{
            									},
            									"readonly" :
            									{
            									},
            									"nulltext" :
            									{
            										"color" : nexacro.ColorObject("#aeaeae")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            									},
            									"mouseover" :
            									{
            									},
            									"pushed" :
            									{
            									},
            									"selected" :
            									{
            									},
            									"focused" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("2px solid #adb1b5, 1px solid #e5e8f1, 1px solid #e5e8f1, 1px solid #e5e8f1")
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_LF_Sch" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_MDI_List" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_LF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_MF_Notice" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_MF_Todo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_NoneS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e5e8f1, 1px solid #e5e8f1, 1px solid #e5e8f1, 1px solid #e5e8f1")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_Comment" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a0a4b0, 0px none, 0px none, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_List" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_Cal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f5f6f7")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_Cbo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#333333")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_CalHead" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_CalMgmt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e5e8f1"),
            												"color" : nexacro.ColorObject("#293139"),
            												"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Medium\"")
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_WF_Cal" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none")
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_CalHead" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none")
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_CalMgmt" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#a4a7b8"),
            															"font" : nexacro.FontObject("14px \"SpoqaHanSansNeo-Regular\"")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e5e8f1"),
            												"padding" : nexacro.PaddingObject("2px 4px 2px 4px")
            											},
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_LF_Sch" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            															"color" : nexacro.ColorObject("#ffffff")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            															"color" : nexacro.ColorObject("#ffffff")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none")
            														}
            													}
            												}
            											},
            											{
            												"grd_MDI_List" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#293139"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#293139"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none")
            														}
            													}
            												}
            											},
            											{
            												"grd_LF_Menu" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none"),
            															"padding" : nexacro.PaddingObject("11px 5px 11px 0px"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Medium\"")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#ffd860")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#ffffff")
            														}
            													}
            												}
            											},
            											{
            												"grd_MF_Notice" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"mouseover" :
            														{
            														}
            													}
            												}
            											},
            											{
            												"grd_MF_Todo" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#f7f3fe")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#f7f3fe")
            														},
            														"mouseover" :
            														{
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_NoneS" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_Comment" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"wordWrap" : "char"
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"wordWrap" : "char"
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"wordWrap" : "char"
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"wordWrap" : "char"
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_List" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #a0a4b0, 0px none"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #a0a4b0, 0px none"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #a0a4b0, 0px none")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #a0a4b0, 0px none")
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_Cbo" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            															"color" : nexacro.ColorObject("#333333")
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_Cal" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_CalMgmt" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 0px none, 1px solid #e1e2e7"),
            															"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            															"color" : nexacro.ColorObject("#333333")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 0px none, 1px solid #e1e2e7"),
            															"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            															"color" : nexacro.ColorObject("#333333")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 0px none, 1px solid #e1e2e7"),
            															"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            															"color" : nexacro.ColorObject("#333333")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e5e8f1"),
            												"padding" : nexacro.PaddingObject("2px 4px 2px 4px"),
            												"color" : nexacro.ColorObject("#000000"),
            												"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Medium\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								},
            								"class" :
            								[
            									{
            										"lst_WF_Calview" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            													"color" : nexacro.ColorObject("#9da0af")
            												},
            												"mouseover" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            													"color" : nexacro.ColorObject("#9da0af")
            												},
            												"focused" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            													"color" : nexacro.ColorObject("#9da0af")
            												},
            												"disabled" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            													"color" : nexacro.ColorObject("#9da0af")
            												},
            												"readonly" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            													"color" : nexacro.ColorObject("#9da0af")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"essential" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"focused" :
            														{
            														},
            														"readonly" :
            														{
            														},
            														"selected" :
            														{
            														},
            														"blinked" :
            														{
            														},
            														"disabled" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_fixing" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #d7d9e3")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Point01" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#d31145")
            														}
            													}
            												}
            											}
            										},
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#d31145")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Point02" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#f28005")
            														}
            													}
            												}
            											}
            										},
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#f28005")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Point03" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#2756b6")
            														}
            													}
            												}
            											}
            										},
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#2756b6")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Point04" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#2d9d0f")
            														}
            													}
            												}
            											}
            										},
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#2d9d0f")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Link" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#228ff5")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_PointTxt01" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_PointTxt02" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_PointTxt03" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_PointTxt04" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Sum01" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"summary" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #eeeeee"),
            															"color" : nexacro.ColorObject("#000000"),
            															"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Medium\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Sum02" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"summary" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #eeeeee"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Medium\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Sum03" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"summary" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #eeeeee"),
            															"color" : nexacro.ColorObject("#333333"),
            															"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Medium\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_DetailTitle" :
            						{
            							"parent" :
            							{
            								"detail" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            													"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Medium\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_LF_Lev1" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_Menu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none"),
            																		"padding" : nexacro.PaddingObject("11px 5px 11px 0px"),
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"font" : nexacro.FontObject("14px \"SpoqaHanSansNeo-Medium\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffd860")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_LF_Lev2" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_Menu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none"),
            																		"padding" : nexacro.PaddingObject("7px 5px 7px 0px"),
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffd860")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_LF_Lev3" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_Menu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none"),
            																		"padding" : nexacro.PaddingObject("7px 5px 7px 0px"),
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffd860")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_DecoNo" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"label_MT" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_MF_Todo" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"mouseover" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"focused" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"readonly" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"selected" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								},
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"class" :
            											[
            												{
            													"lst_WF_Calview" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"mouseover" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"focused" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"readonly" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															}
            														}
            													}
            												}
            											]
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"label_VC" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_MF_Todo" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"mouseover" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"focused" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"readonly" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"selected" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								},
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"class" :
            											[
            												{
            													"lst_WF_Calview" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"mouseover" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"focused" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"readonly" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															}
            														}
            													}
            												}
            											]
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"label_ED" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_MF_Todo" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"mouseover" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"focused" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"readonly" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"selected" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								},
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"class" :
            											[
            												{
            													"lst_WF_Calview" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"mouseover" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"focused" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"readonly" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															}
            														}
            													}
            												}
            											]
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"label_IV" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_MF_Todo" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"mouseover" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"focused" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"readonly" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"selected" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								},
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"class" :
            											[
            												{
            													"lst_WF_Calview" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"mouseover" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"focused" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"readonly" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															}
            														}
            													}
            												}
            											]
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"label_EV" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_MF_Todo" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"mouseover" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"focused" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"readonly" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	},
            																	"selected" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("0px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								},
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"class" :
            											[
            												{
            													"lst_WF_Calview" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"mouseover" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"focused" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"readonly" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															}
            														}
            													}
            												}
            											]
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Line" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #e1e2e7, 0px none"),
            															"color" : nexacro.ColorObject("#999999"),
            															"font" : nexacro.FontObject("11px \"Tahoma\"")
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #e1e2e7, 0px none"),
            															"color" : nexacro.ColorObject("#999999"),
            															"font" : nexacro.FontObject("11px \"Tahoma\"")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #e1e2e7, 0px none"),
            															"color" : nexacro.ColorObject("#999999"),
            															"font" : nexacro.FontObject("11px \"Tahoma\"")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #e1e2e7, 0px none"),
            															"color" : nexacro.ColorObject("#999999"),
            															"font" : nexacro.FontObject("11px \"Tahoma\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Id" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#000000"),
            															"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Bold\"")
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#000000"),
            															"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Bold\"")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#000000"),
            															"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Bold\"")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#000000"),
            															"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Bold\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"saturday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_Cal" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#239cf0")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										},
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_Cal" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#239cf0")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"sunday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_Cal" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ee5555")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										},
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_Cal" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ee5555")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Hcell_day" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalHead" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#80828f")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Hcell_sunday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalHead" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#fd5563")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Hcell_saturday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalHead" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#3683e2")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_MT" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	},
            																	"mouseover" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	},
            																	"selected" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_VC" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	},
            																	"mouseover" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	},
            																	"selected" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_ED" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	},
            																	"mouseover" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	},
            																	"selected" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_IV" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	},
            																	"mouseover" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	},
            																	"selected" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_EV" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	},
            																	"mouseover" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	},
            																	"selected" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_Caladd" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 0px none, 1px solid #e1e2e7")
            																	},
            																	"mouseover" :
            																	{
            																		"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 0px none, 1px solid #e1e2e7")
            																	},
            																	"selected" :
            																	{
            																		"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 0px none, 1px solid #e1e2e7")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"btn_Calmore" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("3px")
            																	},
            																	"mouseover" :
            																	{
            																		"padding" : nexacro.PaddingObject("3px")
            																	},
            																	"selected" :
            																	{
            																		"padding" : nexacro.PaddingObject("3px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_End" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 1px solid #e1e2e7, 1px solid #e1e2e7")
            																	},
            																	"mouseover" :
            																	{
            																		"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 1px solid #e1e2e7, 1px solid #e1e2e7")
            																	},
            																	"selected" :
            																	{
            																		"border" : nexacro.BorderObject("0px none, 1px solid #e1e2e7, 1px solid #e1e2e7, 1px solid #e1e2e7")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_Day" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#2a2c37")
            																	},
            																	"mouseover" :
            																	{
            																		"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#2a2c37")
            																	},
            																	"selected" :
            																	{
            																		"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#2a2c37")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_Sunday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#fd5563")
            																	},
            																	"mouseover" :
            																	{
            																		"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#fd5563")
            																	},
            																	"selected" :
            																	{
            																		"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#fd5563")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_Saturday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#3683e2")
            																	},
            																	"mouseover" :
            																	{
            																		"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#3683e2")
            																	},
            																	"selected" :
            																	{
            																		"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#3683e2")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_Trailingday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#86878c")
            																	},
            																	"mouseover" :
            																	{
            																		"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#86878c")
            																	},
            																	"selected" :
            																	{
            																		"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#86878c")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_Trailingdaybg" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"mouseover" :
            																	{
            																	},
            																	"selected" :
            																	{
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_Holiday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("10px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#fd5563"),
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 4px")
            																	},
            																	"mouseover" :
            																	{
            																		"font" : nexacro.FontObject("10px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#fd5563"),
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 4px")
            																	},
            																	"selected" :
            																	{
            																		"font" : nexacro.FontObject("10px \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#fd5563"),
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 4px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_Today" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("12px bold \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#ffffff")
            																	},
            																	"mouseover" :
            																	{
            																		"font" : nexacro.FontObject("12px bold \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#ffffff")
            																	},
            																	"selected" :
            																	{
            																		"font" : nexacro.FontObject("12px bold \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#ffffff")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_TodayTD" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_CalMgmt" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("12px bold \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#ffffff")
            																	},
            																	"mouseover" :
            																	{
            																		"font" : nexacro.FontObject("12px bold \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#ffffff")
            																	},
            																	"selected" :
            																	{
            																		"font" : nexacro.FontObject("12px bold \"SpoqaHanSansNeo-Regular\""),
            																		"color" : nexacro.ColorObject("#ffffff")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"ico_Attachment" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"class" :
            											[
            												{
            													"lst_WF_Calview" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"mouseover" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"focused" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															},
            															"readonly" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px")
            															}
            														}
            													}
            												}
            											]
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_CalTitle" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"class" :
            											[
            												{
            													"lst_WF_Calview" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\""),
            																"letterSpacing" : nexacro.CSSValueObject("-0.5px"),
            																"color" : nexacro.ColorObject("#333333")
            															},
            															"mouseover" :
            															{
            																"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\""),
            																"letterSpacing" : nexacro.CSSValueObject("-0.5px"),
            																"color" : nexacro.ColorObject("#333333")
            															},
            															"focused" :
            															{
            																"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\""),
            																"letterSpacing" : nexacro.CSSValueObject("-0.5px"),
            																"color" : nexacro.ColorObject("#333333")
            															},
            															"readonly" :
            															{
            																"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\""),
            																"letterSpacing" : nexacro.CSSValueObject("-0.5px"),
            																"color" : nexacro.ColorObject("#333333")
            															}
            														}
            													}
            												}
            											]
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_bg" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"class" :
            											[
            												{
            													"lst_WF_Calview" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("1px solid #f2f2f4, 0px none, 0px none, 0px none")
            															},
            															"mouseover" :
            															{
            																"border" : nexacro.BorderObject("1px solid #f2f2f4, 0px none, 0px none, 0px none")
            															},
            															"focused" :
            															{
            																"border" : nexacro.BorderObject("1px solid #f2f2f4, 0px none, 0px none, 0px none")
            															},
            															"readonly" :
            															{
            																"border" : nexacro.BorderObject("1px solid #f2f2f4, 0px none, 0px none, 0px none")
            															}
            														}
            													}
            												}
            											]
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_CalCode" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"class" :
            											[
            												{
            													"lst_WF_Calview" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            															},
            															"mouseover" :
            															{
            																"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            															},
            															"focused" :
            															{
            																"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            															},
            															"readonly" :
            															{
            																"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            															}
            														}
            													}
            												}
            											]
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_CalCon" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"class" :
            											[
            												{
            													"lst_WF_Calview" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            															},
            															"mouseover" :
            															{
            																"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            															},
            															"focused" :
            															{
            																"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            															},
            															"readonly" :
            															{
            																"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            															}
            														}
            													}
            												}
            											]
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #dddddd"),
            								"color" : nexacro.ColorObject("#646982"),
            								"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #313340")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #313340")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #313340")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #eeeeee"),
            								"color" : nexacro.ColorObject("#aaaaaa")
            							}
            						}
            					},
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"cell_WF_PointBtn01" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff")
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							{
            								"cell_TF_FavMove" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"class" :
            															[
            																{
            																	"grd_LF_Sch" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"focused" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"mouseover" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"pushed" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"selected" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			}
            																		}
            																	}
            																},
            																{
            																	"grd_MDI_List" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"focused" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"mouseover" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"pushed" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"selected" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			}
            																		}
            																	}
            																}
            															]
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							{
            								"cell_TF_Delete" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"class" :
            															[
            																{
            																	"grd_LF_Sch" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"focused" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"mouseover" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"pushed" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"selected" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			}
            																		}
            																	}
            																},
            																{
            																	"grd_MDI_List" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"focused" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"mouseover" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"pushed" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			},
            																			"selected" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			}
            																		}
            																	}
            																}
            															]
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							{
            								"cell_LF_Delete" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"class" :
            															[
            																{
            																	"grd_LF_Menu" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_Delete.png\")")
            																			},
            																			"focused" :
            																			{
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_Delete.png\")")
            																			},
            																			"mouseover" :
            																			{
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_Delete.png\")")
            																			},
            																			"pushed" :
            																			{
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_Delete.png\")")
            																			},
            																			"selected" :
            																			{
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_Delete.png\")")
            																			}
            																		}
            																	}
            																}
            															]
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							{
            								"cell_WF_MoreBtn" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"class" :
            															[
            																{
            																	"grd_WF_Comment" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"border" : nexacro.BorderObject("0px none"),
            																				"icon" : nexacro.UrlObject("url(\"theme://images/grd_WF_MoreBtn.png\")")
            																			},
            																			"focused" :
            																			{
            																				"border" : nexacro.BorderObject("0px none"),
            																				"icon" : nexacro.UrlObject("url(\"theme://images/grd_WF_MoreBtn.png\")")
            																			},
            																			"mouseover" :
            																			{
            																				"border" : nexacro.BorderObject("0px none"),
            																				"icon" : nexacro.UrlObject("url(\"theme://images/grd_WF_MoreBtn.png\")")
            																			},
            																			"pushed" :
            																			{
            																				"border" : nexacro.BorderObject("0px none"),
            																				"icon" : nexacro.UrlObject("url(\"theme://images/grd_WF_MoreBtn.png\")")
            																			},
            																			"selected" :
            																			{
            																				"border" : nexacro.BorderObject("0px none"),
            																				"icon" : nexacro.UrlObject("url(\"theme://images/grd_WF_MoreBtn.png\")")
            																			}
            																		}
            																	}
            																}
            															]
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							{
            								"cell_Caladd" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"class" :
            															[
            																{
            																	"grd_WF_CalMgmt" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Caladd.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			},
            																			"mouseover" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Caladd.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			},
            																			"pushed" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Caladd.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			},
            																			"selected" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Caladd.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			}
            																		}
            																	}
            																}
            															]
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							{
            								"cell_CaladdTD" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"class" :
            															[
            																{
            																	"grd_WF_CalMgmt" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Caladd.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			},
            																			"mouseover" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Caladd.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			},
            																			"pushed" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Caladd.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			},
            																			"selected" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Caladd.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			}
            																		}
            																	}
            																}
            															]
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							{
            								"cell_Calmore" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"class" :
            															[
            																{
            																	"grd_WF_CalMgmt" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Calmore.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			},
            																			"mouseover" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Calmore.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			},
            																			"pushed" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Calmore.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			},
            																			"selected" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Calmore.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			}
            																		}
            																	}
            																}
            															]
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							{
            								"cell_CalmoreTD" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"class" :
            															[
            																{
            																	"grd_WF_CalMgmt" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Calmore.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			},
            																			"mouseover" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Calmore.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			},
            																			"pushed" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Calmore.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			},
            																			"selected" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Calmore.png\")"),
            																				"border" : nexacro.BorderObject("0px none"),
            																				"padding" : nexacro.PaddingObject("0px")
            																			}
            																		}
            																	}
            																}
            															]
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							{
            								"btn_Calmore" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"class" :
            															[
            																{
            																	"grd_WF_CalMgmt" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"border" : nexacro.BorderObject("1px solid #e9ebf2"),
            																				"font" : nexacro.FontObject("10px \"SpoqaHanSansNeo-Regular\""),
            																				"color" : nexacro.ColorObject("#abadb9")
            																			},
            																			"mouseover" :
            																			{
            																				"border" : nexacro.BorderObject("1px solid #e9ebf2"),
            																				"font" : nexacro.FontObject("10px \"SpoqaHanSansNeo-Regular\""),
            																				"color" : nexacro.ColorObject("#abadb9")
            																			},
            																			"pushed" :
            																			{
            																				"border" : nexacro.BorderObject("1px solid #e9ebf2"),
            																				"font" : nexacro.FontObject("10px \"SpoqaHanSansNeo-Regular\""),
            																				"color" : nexacro.ColorObject("#abadb9")
            																			},
            																			"selected" :
            																			{
            																				"border" : nexacro.BorderObject("1px solid #e9ebf2"),
            																				"font" : nexacro.FontObject("10px \"SpoqaHanSansNeo-Regular\""),
            																				"color" : nexacro.ColorObject("#abadb9")
            																			}
            																		}
            																	}
            																}
            															]
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							{
            								"cell_Attachment" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"class" :
            															[
            																{
            																	"grd_WF_CalMgmt" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"icon" : nexacro.UrlObject("URL(\"theme://images/cell_Attachment.png\")")
            																			}
            																		}
            																	}
            																}
            															]
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"cell_WF_Cal" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"border" : nexacro.BorderObject("0px none")
            																},
            																"focused" :
            																{
            																	"border" : nexacro.BorderObject("0px none")
            																},
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("0px none")
            																},
            																"pushed" :
            																{
            																	"border" : nexacro.BorderObject("0px none")
            																},
            																"selected" :
            																{
            																	"border" : nexacro.BorderObject("0px none")
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeClose.png\")")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeOpen.png\")")
            									}
            								}
            							},
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"class" :
            														[
            															{
            																"grd_LF_Menu" :
            																{
            																	"self" :
            																	{
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_TreeOpen.png\")")
            																		},
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_TreeClose.png\")")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeCloseImg.png\")")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeOpenImg.png\")")
            									},
            									"leaf" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeLeafImg.png\")")
            									}
            								}
            							},
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"class" :
            														[
            															{
            																"grd_LF_Menu" :
            																{
            																	"self" :
            																	{
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_TreeCloseImg.png\")")
            																		},
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_TreeOpenImg.png\")")
            																		},
            																		"leaf" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_TreeLeafImg.png\")")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"celltreeline" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px dotted #999999")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px dotted #aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"textPadding" : nexacro.PaddingObject("0px 5px 0px 5px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #dddddd")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #efefef")
            							}
            						}
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef")
            					}
            				}
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("2px solid #444444, 1px solid #c9c9c9, 1px solid #c9c9c9, 1px solid #c9c9c9")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("2px solid #444444, 1px solid #c9c9c9, 1px solid #c9c9c9, 1px solid #c9c9c9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("2px solid #444444, 1px solid #c9c9c9, 1px solid #c9c9c9, 1px solid #c9c9c9")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("2px solid #444444, 1px solid #c9c9c9, 1px solid #c9c9c9, 1px solid #c9c9c9")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("2px solid #444444, 1px solid #c9c9c9, 1px solid #c9c9c9, 1px solid #c9c9c9")
            					}
            				},
            				"class" :
            				[
            					{
            						"lst_WF_Calview" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #eaeaea, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #eaeaea, 0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #eaeaea, 0px none")
            							}
            						},
            						"class" :
            						[
            							{
            								"lst_WF_Calview" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"edge" : nexacro.EdgeImageObject("url(\"theme://images/cell_Calbg.png\") 10px 10px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"edge" : nexacro.EdgeImageObject("url(\"theme://images/cell_Calbg.png\") 10px 10px")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"edge" : nexacro.EdgeImageObject("url(\"theme://images/cell_Calbg.png\") 10px 10px")
            										}
            									}
            								}
            							}
            						]
            					},
            					"datepicker" :
            					{
            						"parent" :
            						{
            							"datepickergroup" :
            							{
            								"parent" :
            								{
            									"DateRangePicker" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #697888"),
            												"padding" : nexacro.PaddingObject("2px")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("0px solid #125dae")
            											}
            										}
            									},
            									"DateRangePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #697888"),
            												"padding" : nexacro.PaddingObject("2px")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("0px solid #125dae")
            											}
            										}
            									},
            									"PopupDateRangePicker" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #697888"),
            												"padding" : nexacro.PaddingObject("2px")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("0px solid #125dae")
            											}
            										}
            									}
            								}
            							},
            							"Calendar" :
            							{
            								"class" :
            								[
            									{
            										"cal_MF_Cal" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"border" : nexacro.BorderObject("0px none")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					},
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"grd_WF_CalMgmt" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #e1e2e7")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dcd5cf"),
            						"padding" : nexacro.PaddingObject("0px 8px 0px 0px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aeaeae")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				},
            				"class" :
            				[
            					{
            						"output" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcd5cf")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"error" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								}
            							}
            						}
            					}
            				]
            			},
            			"MaskEditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dcd5cf"),
            						"padding" : nexacro.PaddingObject("0px 8px 0px 0px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aeaeae")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				}
            			},
            			"Menu" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"focused" :
            					{
            					}
            				}
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 25px 0px 25px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 15px \"SpoqaHanSansNeo-Regular\"")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#31bff2")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#31bff2")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#31bff2")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#5b6289")
            							}
            						}
            					}
            				}
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #646982")
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 10px 5px 10px")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("5px 10px 5px 10px")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 10px 5px 10px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            								"color" : nexacro.ColorObject("#333333")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            								"color" : nexacro.ColorObject("#333333")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            								"color" : nexacro.ColorObject("#333333")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#333333")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#333333")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemcheckbox" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme:://images/mnu_WF_PmnuChk.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme:://images/mnu_WF_PmnuChk.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme:://images/mnu_WF_PmnuChk.png\")")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/mnu_WF_PmnuChk.png\")"),
            										"padding" : nexacro.PaddingObject("5px 0px 5px 5px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/mnu_WF_PmnuChk.png\")"),
            										"padding" : nexacro.PaddingObject("5px 0px 5px 5px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/mnu_WF_PmnuChk.png\")"),
            										"padding" : nexacro.PaddingObject("5px 0px 5px 5px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemhotkeytext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#dddddd")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#dddddd")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#dddddd")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            										"color" : nexacro.ColorObject("#aaaaaa")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            										"color" : nexacro.ColorObject("#aaaaaa")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            										"color" : nexacro.ColorObject("#aaaaaa")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
            										"color" : nexacro.ColorObject("#333333")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_SelBtn.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_SelBtn.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_SelBtn.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #646982")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #646982")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #646982")
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #eeeeee")
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #eeeeee")
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"progressstartcap" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressendcap" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemES.png\")"),
            								"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            							},
            							"readonly" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemES.png\")"),
            								"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemSES.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemSES.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemSES.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemD.png\")")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemSD.png\")")
            							}
            						},
            						"class" :
            						[
            							{
            								"essential" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemES.png\")"),
            											"color" : nexacro.ColorObject("#d31145")
            										},
            										"mouseover" :
            										{
            											"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemSES.png\")"),
            											"color" : nexacro.ColorObject("#d31145")
            										},
            										"mouseover_selected" :
            										{
            											"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemSES.png\")"),
            											"color" : nexacro.ColorObject("#d31145")
            										},
            										"selected" :
            										{
            											"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemSES.png\")"),
            											"color" : nexacro.ColorObject("#d31145")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dcd5cf")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef")
            					}
            				},
            				"class" :
            				[
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcd5cf")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"error" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								}
            							}
            						}
            					}
            				]
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtn.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnD.png\")")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtn.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtn.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnD.png\")")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtn.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 0px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 0px")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 0px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("#aaaaaa")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 4px 0px"),
            								"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 4px 0px"),
            								"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 4px 0px"),
            								"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 4px 0px"),
            								"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("#aaaaaa")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"SpinControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Static" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"wordWrap" : "none"
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				},
            				"class" :
            				[
            					{
            						"sta_TF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_LogoTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("16px \"SpoqaHanSansNeo-Medium\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_LF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_BF_Date" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#828282"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_BF_Info" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 9px"),
            									"color" : nexacro.ColorObject("#293139"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_BF_User" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 20px"),
            									"color" : nexacro.ColorObject("#293139"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_tile" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#23273c"),
            									"font" : nexacro.FontObject("bold 16px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_tile2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#f7f3fe"),
            									"font" : nexacro.FontObject("bold 16px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TitleLocation" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("18px \"SpoqaHanSansNeo-Medium\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Location" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Light\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_SchLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 30px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px"),
            									"wordWrap" : "none"
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_SchLabelEssential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 30px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Bold" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Bold\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Label" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e1e2e7"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 12px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_LabelEssential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e1e2e7"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 12px"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_LabelBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e1e2e7"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 12px"),
            									"color" : nexacro.ColorObject("#000000")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("14px 0px 7px 18px"),
            									"font" : nexacro.FontObject("14px \"SpoqaHanSansNeo-Medium\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_SubTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("14px 0px 7px 18px"),
            									"font" : nexacro.FontObject("14px \"SpoqaHanSansNeo-Medium\""),
            									"color" : nexacro.ColorObject("#2A2F34")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Total" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\""),
            									"wordWrap" : "none"
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Comment" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 22px"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            									"color" : nexacro.ColorObject("#000000")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Dot" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\""),
            									"color" : nexacro.ColorObject("#000000")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Mes" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d9098")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Cal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 14px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_LOGIN_Id" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #e9ebf3, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_LOGIN_Pw" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #e9ebf3, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_LOGIN_Language" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #e9ebf3, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GSize" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("20px \"SpoqaHanSansNeo-Bold\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt02B" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"SpoqaHanSansNeo-Bold\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#636981"),
            									"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt04" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ff000c"),
            									"font" : nexacro.FontObject("11px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt05" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("12px/20px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt06" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ee5555"),
            									"font" : nexacro.FontObject("12px/20px \"SpoqaHanSansNeo-Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GBar" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 55px"),
            									"color" : nexacro.ColorObject("#23273c"),
            									"font" : nexacro.FontObject("35px \"SpoqaHanSansNeo-Bold\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GNum" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#d31145"),
            									"font" : nexacro.FontObject("30px \"SpoqaHanSansNeo-Bold\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLineV" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineV.png') 5px 2px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLineH" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineH.png') 5px 2px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GBg01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #989A9C")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GBg02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #333333"),
            									"padding" : nexacro.PaddingObject("8px")
            								}
            							}
            						}
            					},
            					{
            						"sta_CalMonth" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("26px \"SpoqaHanSansNeo-Regular\""),
            									"color" : nexacro.ColorObject("#434967"),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_CalTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("16px \"SpoqaHanSansNeo-Regular\""),
            									"color" : nexacro.ColorObject("#9295a5")
            								}
            							}
            						}
            					}
            				]
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 20px 0px")
            					}
            				}
            			},
            			"stepitem" :
            			{
            				"parent" :
            				{
            					"StepControl" :
            					{
            						"self" :
            						{
            							"selected" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e5e8f1"),
            								"color" : nexacro.ColorObject("#293139")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e5e8f1"),
            								"color" : nexacro.ColorObject("#293139")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e5e8f1"),
            								"color" : nexacro.ColorObject("#293139")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#caccd1")
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitemtext" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 20px 0px 20px"),
            										"font" : nexacro.FontObject("13px/32px \"SpoqaHanSansNeo-Regular\"")
            									},
            									"mouseover" :
            									{
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#aeaeae")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_X.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_X.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_X.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_X.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_X.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_X.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e5e8f1, 0px none, 0px none, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e5e8f1, 0px none, 0px none, 0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e5e8f1, 0px none, 0px none, 0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e5e8f1, 0px none, 0px none, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dcd5cf"),
            						"padding" : nexacro.PaddingObject("8px 8px 0px 8px"),
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("13px/18px \"SpoqaHanSansNeo-Regular\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aaaaaa")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				},
            				"class" :
            				[
            					{
            						"output" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcd5cf")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"error" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f28005")
            								}
            							}
            						}
            					},
            					{
            						"txt_POP_Text" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								}
            							}
            						}
            					}
            				]
            			},
            			"TextAreaControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dcd5cf"),
            						"padding" : nexacro.PaddingObject("8px 8px 0px 8px"),
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("13px/18px \"SpoqaHanSansNeo-Regular\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #adb1b5")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aaaaaa")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				}
            			},
            			"CheckBoxSetControl" :
            			{
            				"self" :
            				{
            					"disabled" :
            					{
            					}
            				}
            			},
            			"checkboxsetitem" :
            			{
            				"parent" :
            				{
            					"CheckBoxSetControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#555555"),
            								"padding" : nexacro.PaddingObject("2px 9px 3px 9px"),
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_D.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_O.png')")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_S.png')")
            							}
            						}
            					}
            				}
            			},
            			"MultiCombo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"MultiComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"multicombotext" :
            			{
            				"parent" :
            				{
            					"MultiCombo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            							}
            						}
            					},
            					"MultiComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            							}
            						}
            					}
            				}
            			},
            			"multicombotagbox" :
            			{
            				"parent" :
            				{
            					"MultiCombo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px")
            							}
            						}
            					},
            					"MultiComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px")
            							}
            						}
            					}
            				}
            			},
            			"MultiComboTagBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"padding" : nexacro.PaddingObject("5px")
            					}
            				}
            			},
            			"tagboxitem" :
            			{
            				"parent" :
            				{
            					"MultiComboTagBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("3px 9px 3px 9px")
            							}
            						}
            					}
            				}
            			},
            			"tagboxedit" :
            			{
            				"parent" :
            				{
            					"MultiComboTagBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("3px")
            							}
            						}
            					}
            				}
            			},
            			"TagBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("3px 9px 3px 9px")
            					},
            					"selected" :
            					{
            						"color" : nexacro.ColorObject("#ffffff")
            					}
            				}
            			},
            			"tagtext" :
            			{
            				"parent" :
            				{
            					"TagBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
            							}
            						}
            					}
            				}
            			},
            			"MultiComboListControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"checkboxset" :
            			{
            				"parent" :
            				{
            					"MultiComboListControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"color" : nexacro.ColorObject("#555555"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"selectallcheckbox" :
            			{
            				"parent" :
            				{
            					"MultiComboListControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#555555"),
            								"padding" : nexacro.PaddingObject("2px 9px 3px 9px"),
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d5d5d5")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_D.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_O.png')")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_S.png')")
            							}
            						}
            					}
            				}
            			},
            			"label" :
            			{
            				"parent" :
            				{
            					"TextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("0px 9px 0px 9px")
            							},
            							"focused_floating" :
            							{
            								"color" : nexacro.ColorObject("#5a86cd")
            							},
            							"mouseover_floating" :
            							{
            								"color" : nexacro.ColorObject("#5a86cd")
            							},
            							"floating" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("2px")
            							},
            							"floatingvalid" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("2px")
            							},
            							"floatinginvalid" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("2px"),
            								"color" : nexacro.ColorObject("#b00020")
            							},
            							"focused_floatingvalid" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("2px"),
            								"color" : nexacro.ColorObject("#2E7D32")
            							},
            							"mouseover_floatingvalid" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("2px"),
            								"color" : nexacro.ColorObject("#2E7D32")
            							}
            						}
            					},
            					"MultiLineTextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("0px 9px 0px 9px")
            							},
            							"focused_floating" :
            							{
            								"color" : nexacro.ColorObject("#5a86cd")
            							},
            							"mouseover_floating" :
            							{
            								"color" : nexacro.ColorObject("#5a86cd")
            							},
            							"floating" :
            							{
            								"padding" : nexacro.PaddingObject("2px")
            							}
            						}
            					},
            					"DateField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("0px 9px 0px 9px")
            							},
            							"focused_floating" :
            							{
            								"color" : nexacro.ColorObject("#5a86cd")
            							},
            							"mouseover_floating" :
            							{
            								"color" : nexacro.ColorObject("#5a86cd")
            							},
            							"floating" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("2px")
            							},
            							"floatingvalid" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("2px")
            							},
            							"floatinginvalid" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("2px"),
            								"color" : nexacro.ColorObject("#b00020")
            							},
            							"focused_floatingvalid" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("2px"),
            								"color" : nexacro.ColorObject("#2E7D32")
            							},
            							"mouseover_floatingvalid" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("2px"),
            								"color" : nexacro.ColorObject("#2E7D32")
            							}
            						}
            					}
            				}
            			},
            			"nulltext" :
            			{
            				"parent" :
            				{
            					"TextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("0px 9px 0px 9px")
            							}
            						}
            					},
            					"MultiLineTextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("0px 9px 0px 9px")
            							}
            						}
            					},
            					"DateField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("0px 9px 0px 9px")
            							}
            						}
            					}
            				}
            			},
            			"box" :
            			{
            				"parent" :
            				{
            					"TextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #D5D5D5"),
            								"padding" : nexacro.PaddingObject("0px 9px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"readonly" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							},
            							"invalid" :
            							{
            								"border" : nexacro.BorderObject("1px solid #b00020")
            							},
            							"focused_valid" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2E7D32")
            							},
            							"mouseover_valid" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2E7D32")
            							}
            						}
            					},
            					"MultiLineTextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #D5D5D5"),
            								"padding" : nexacro.PaddingObject("1px 9px 9px 9px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"readonly" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					},
            					"DateField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #D5D5D5"),
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"readonly" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							},
            							"invalid" :
            							{
            								"border" : nexacro.BorderObject("1px solid #b00020")
            							},
            							"focused_valid" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2E7D32")
            							},
            							"mouseover_valid" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2E7D32")
            							}
            						}
            					}
            				}
            			},
            			"trailingbutton" :
            			{
            				"parent" :
            				{
            					"box" :
            					{
            						"parent" :
            						{
            							"TextField" :
            							{
            								"self" :
            								{
            									"invalid" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									},
            									"valid" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"prefixtext" :
            			{
            				"parent" :
            				{
            					"box" :
            					{
            						"parent" :
            						{
            							"TextField" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#999999"),
            										"padding" : nexacro.PaddingObject("0px 9px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"postfixtext" :
            			{
            				"parent" :
            				{
            					"box" :
            					{
            						"parent" :
            						{
            							"TextField" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#999999"),
            										"padding" : nexacro.PaddingObject("0px 9px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"charcounttext" :
            			{
            				"parent" :
            				{
            					"TextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 15px 0px 0px")
            							}
            						}
            					},
            					"MultiLineTextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 15px 0px 0px")
            							}
            						}
            					}
            				}
            			},
            			"helpertext" :
            			{
            				"parent" :
            				{
            					"TextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 0px 0px 15px")
            							},
            							"invalid" :
            							{
            								"color" : nexacro.ColorObject("#b00020")
            							}
            						}
            					},
            					"MultiLineTextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 0px 0px 15px")
            							}
            						}
            					},
            					"DateField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 0px 0px 15px")
            							},
            							"invalid" :
            							{
            								"color" : nexacro.ColorObject("#b00020")
            							}
            						}
            					}
            				}
            			},
            			"DateRangePicker" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #697888")
            					}
            				}
            			},
            			"DateRangePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #697888")
            					}
            				}
            			},
            			"PopupDateRangePicker" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #697888")
            					}
            				}
            			},
            			"datetabbutton" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
            								"icon" : nexacro.UrlObject("url('theme://images/daterange.png')")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
            								"icon" : nexacro.UrlObject("url('theme://images/daterange.png')")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
            								"icon" : nexacro.UrlObject("url('theme://images/daterange.png')")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
            							}
            						}
            					}
            				}
            			},
            			"timetabbutton" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
            								"icon" : nexacro.UrlObject("url('theme://images/timerange.png')")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
            								"icon" : nexacro.UrlObject("url('theme://images/timerange.png')")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
            								"icon" : nexacro.UrlObject("url('theme://images/timerange.png')")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
            							}
            						}
            					}
            				}
            			},
            			"headline" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("15px 15px")
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("15px 15px")
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("15px 15px")
            							}
            						}
            					}
            				}
            			},
            			"splitline" :
            			{
            				"parent" :
            				{
            					"headline" :
            					{
            						"parent" :
            						{
            							"DateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dddddd")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dddddd")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dddddd")
            									}
            								}
            							}
            						}
            					},
            					"datepickergroup" :
            					{
            						"parent" :
            						{
            							"DateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dddddd")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dddddd")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dddddd")
            									}
            								}
            							}
            						}
            					},
            					"timepickergroup" :
            					{
            						"parent" :
            						{
            							"DateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dddddd")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dddddd")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dddddd")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"startdate" :
            			{
            				"parent" :
            				{
            					"headline" :
            					{
            						"parent" :
            						{
            							"DateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"enddate" :
            			{
            				"parent" :
            				{
            					"headline" :
            					{
            						"parent" :
            						{
            							"DateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"startsubdate" :
            			{
            				"parent" :
            				{
            					"headline" :
            					{
            						"parent" :
            						{
            							"DateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"endsubdate" :
            			{
            				"parent" :
            				{
            					"headline" :
            					{
            						"parent" :
            						{
            							"DateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"okbutton" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("10px 8px")
            							},
            							"focused" :
            							{
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            							},
            							"selected" :
            							{
            							},
            							"pushed" :
            							{
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("10px 8px")
            							},
            							"focused" :
            							{
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            							},
            							"selected" :
            							{
            							},
            							"pushed" :
            							{
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("10px 8px")
            							},
            							"focused" :
            							{
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            							},
            							"selected" :
            							{
            							},
            							"pushed" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cancelbutton" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("10px 8px")
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("10px 8px")
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("10px 8px")
            							}
            						}
            					}
            				}
            			},
            			"datepicker" :
            			{
            				"parent" :
            				{
            					"datepickergroup" :
            					{
            						"parent" :
            						{
            							"DateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("4px")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("4px")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("4px")
            									}
            								}
            							}
            						}
            					},
            					"Calendar" :
            					{
            						"class" :
            						[
            							{
            								"cal_MF_Cal" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"datepickergroup" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px")
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px")
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px")
            							}
            						}
            					}
            				}
            			},
            			"timepickergroup" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("10px")
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("10px")
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("10px")
            							}
            						}
            					}
            				}
            			},
            			"timepicker" :
            			{
            				"parent" :
            				{
            					"timepickergroup" :
            					{
            						"parent" :
            						{
            							"DateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("10px")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("10px")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("10px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekband" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"disabled" :
            													{
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"disabled" :
            													{
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"disabled" :
            													{
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
            														"color" : nexacro.ColorObject("#333333"),
            														"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
            														"color" : nexacro.ColorObject("#333333"),
            														"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
            														"color" : nexacro.ColorObject("#333333"),
            														"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            													}
            												}
            											}
            										}
            									},
            									"Calendar" :
            									{
            										"class" :
            										[
            											{
            												"cal_MF_Cal" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#0a0a0a"),
            															"font" : nexacro.FontObject("bold 16px \"Myriad Pro\"")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"TimePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("10px")
            					}
            				}
            			},
            			"delimiter" :
            			{
            				"parent" :
            				{
            					"TimePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
            								"color" : nexacro.ColorObject("#333333")
            							}
            						}
            					}
            				}
            			},
            			"spinneritem" :
            			{
            				"parent" :
            				{
            					"ampmspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"selected" :
            									{
            										"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            									},
            									"focused_selected" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									}
            								}
            							}
            						}
            					},
            					"hourspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"selected" :
            									{
            										"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            									},
            									"focused_selected" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									}
            								}
            							}
            						}
            					},
            					"minspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"selected" :
            									{
            										"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            									},
            									"focused_selected" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									}
            								}
            							}
            						}
            					},
            					"secspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"selected" :
            									{
            										"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            									},
            									"focused_selected" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"overlaytop" :
            			{
            				"parent" :
            				{
            					"ampmspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #cccccc")
            									}
            								}
            							}
            						}
            					},
            					"hourspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #cccccc")
            									}
            								}
            							}
            						}
            					},
            					"minspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #cccccc")
            									}
            								}
            							}
            						}
            					},
            					"secspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #cccccc")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"overlaybottom" :
            			{
            				"parent" :
            				{
            					"ampmspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cccccc, 0px none, 0px none")
            									}
            								}
            							}
            						}
            					},
            					"hourspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cccccc, 0px none, 0px none")
            									}
            								}
            							}
            						}
            					},
            					"minspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cccccc, 0px none, 0px none")
            									}
            								}
            							}
            						}
            					},
            					"secspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cccccc, 0px none, 0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"PopupDiv" :
            			{
            				"class" :
            				[
            					{
            						"pdiv_MDI_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff")
            								}
            							}
            						}
            					},
            					{
            						"pdiv_LF_Sch" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #7b8288")
            								}
            							}
            						}
            					},
            					{
            						"pdiv_WF_List" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a0a4b0")
            								}
            							}
            						}
            					},
            					{
            						"pdiv_WF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #646982")
            								}
            							}
            						}
            					}
            				]
            			},
            			"vscrollbar" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"grd_LF_Menu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 5px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 5px")
            										},
            										"disabled" :
            										{
            										}
            									}
            								}
            							},
            							{
            								"grd_MDI_List" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 5px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 5px")
            										},
            										"disabled" :
            										{
            										}
            									}
            								}
            							},
            							{
            								"grd_LF_Sch" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 5px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 5px")
            										},
            										"disabled" :
            										{
            										}
            									}
            								}
            							},
            							{
            								"grd_MF_Todo" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 5px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 5px")
            										}
            									}
            								}
            							},
            							{
            								"grd_WF_CalMgmt" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #e1e2e7, 0px none, 1px solid #e1e2e7, 0px none"),
            											"padding" : nexacro.PaddingObject("0px 5px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #e1e2e7, 0px none, 1px solid #e1e2e7, 0px none"),
            											"padding" : nexacro.PaddingObject("0px 5px")
            										},
            										"disabled" :
            										{
            										}
            									}
            								}
            							}
            						]
            					},
            					"ListView" :
            					{
            						"class" :
            						[
            							{
            								"lst_WF_Calview" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 5px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 5px")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"Div" :
            			{
            				"class" :
            				[
            					{
            						"div_WF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e5e8f1")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_SchSub" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9deeb")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_Popup" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #4f5860")
            								}
            							}
            						}
            					},
            					{
            						"div_CalHead" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"div_CalView" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dcdde5")
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true,
            			"applyMarkupValidation" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/cal_WF_PreBtn.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PreBtnO.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PreBtnD.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtn.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtnO.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtnD.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Min.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MinO.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MinD.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Max.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MaxD.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Normal.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_NormalO.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_NormalD.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Close.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_CloseO.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_CloseD.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HdecO.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HdecD.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HincD.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HincO.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VdecO.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VdecD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VincO.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VincD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtn.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtnO.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtnD.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DownBtn.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DownBtnO.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DownBtnD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpBtn.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpBtnO.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpBtnD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_box.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxO.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxSO.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxDS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_Drop.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropO.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropD.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Search.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeClose.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeOpen.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCloseImg.png")] = { width:16, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeOpenImg.png")] = { width:16, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeLeafImg.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_Prev.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PrevD.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_Next.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_NextD.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_Prev.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_PrevO.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_PrevD.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_Next.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_NextO.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_NextD.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_SelBtn.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PmnuChk.png")] = { width:16, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemES.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemSES.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemSD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PreBtn.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PreBtnO.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtn.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtnO.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_X.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxES.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxSES.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/essential.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Subtitle.png")] = { width:4, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_D.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_O.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_S.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_O.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_P.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_O.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/invalid.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/valid.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/dropdown.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/dropdown_invalid.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/dropdown_valid.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/daterange.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/timerange.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_TF_FavMove.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_TF_Delete.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_LogoBg.png")] = { width:30, height:43 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_Logo.png")] = { width:29, height:31 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Close.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_CloseO.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Open.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_OpenO.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Home.png")] = { width:14, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_HomeS.png")] = { width:14, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_CloseAll.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_List.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Pre.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Next.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Close.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Close.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Open.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Menu01.png")] = { width:24, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Menu02.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Menu03.png")] = { width:24, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Menu04.png")] = { width:24, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Menu05.png")] = { width:24, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Menu06.png")] = { width:24, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Menu07.png")] = { width:25, height:25 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Set.png")] = { width:31, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Logout.png")] = { width:31, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Sch.png")] = { width:17, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_SchO.png")] = { width:17, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Up.png")] = { width:8, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Down.png")] = { width:8, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_Line.png")] = { width:26, height:38 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeOpen.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeClose.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeCloseImg.png")] = { width:1, height:1 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeOpenImg.png")] = { width:1, height:1 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeLeafImg.png")] = { width:3, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_Delete.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_BF_Bullet.png")] = { width:4, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_BF_User.png")] = { width:16, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_More.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_MoreO.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_New.png")] = { width:18, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Restore.png")] = { width:18, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Quick01.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Quick02.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Quick03.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Quick04.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Quick05.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Quick06.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Left.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Right.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_CalPrev.png")] = { width:7, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_CalPrevO.png")] = { width:7, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_CalNext.png")] = { width:7, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_CalNextO.png")] = { width:7, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/label_MT.png")] = { width:27, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/label_VC.png")] = { width:27, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/label_ED.png")] = { width:27, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/label_IV.png")] = { width:27, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/label_EV.png")] = { width:27, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Srh.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SearchO.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Add.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Delete.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Copy.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cancel.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Data.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_GridClose.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_GridOpen.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RowUp.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RowDown.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PopUp.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Select.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ExcelUp.png")] = { width:28, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ExcelDown.png")] = { width:28, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Bookmark.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BookmarkS.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Open.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_OpenS.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Reload.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ReloadS.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Save.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SaveS.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Up.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Down.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PageL.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PageR.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Preview.png")] = { width:8, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Next.png")] = { width:8, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal01.png")] = { width:18, height:23 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal01O.png")] = { width:18, height:23 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal02.png")] = { width:17, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal02O.png")] = { width:17, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal03.png")] = { width:19, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal03O.png")] = { width:19, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal04.png")] = { width:18, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal04O.png")] = { width:18, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal05.png")] = { width:18, height:23 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal05O.png")] = { width:18, height:23 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal06.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal06O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal07.png")] = { width:23, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal07O.png")] = { width:23, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal08.png")] = { width:19, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal08O.png")] = { width:19, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal09.png")] = { width:17, height:23 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal09O.png")] = { width:17, height:23 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal10.png")] = { width:17, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal10O.png")] = { width:17, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal11.png")] = { width:18, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal11O.png")] = { width:18, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal12.png")] = { width:17, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cal12O.png")] = { width:17, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Light.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_LightS.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Dark.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_DarkS.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_MoreBtn.png")] = { width:18, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Title.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_SubTitle.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Comment.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Dot.png")] = { width:3, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Light.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Dark.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("imagerc::devPackModule/cbo_WF_Drop.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("imagerc::devPackModule/cbo_WF_DropO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("imagerc::devPackModule/cbo_WF_DropD.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("imagerc::devPackModule/btn_WF_Search.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("imagerc::devPackModule/btn_WF_SearchO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_LOGIN_Logo.png")] = { width:277, height:263 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_LOGIN_Id.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_LOGIN_Pw.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_LOGIN_Language.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_POP_Close.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineV.png")] = { width:9, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineH.png")] = { width:17, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_MT.png")] = { width:12, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_VC.png")] = { width:12, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_ED.png")] = { width:12, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_IV.png")] = { width:12, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_EV.png")] = { width:12, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_Caladd.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_Calmore.png")] = { width:13, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_CalToday.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_Attachment.png")] = { width:7, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalRefresh.png")] = { width:16, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalPrev.png")] = { width:10, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalPrevO.png")] = { width:10, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalNext.png")] = { width:10, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalNextO.png")] = { width:10, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalYearPrev.png")] = { width:16, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalYearPrevO.png")] = { width:16, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalYearNext.png")] = { width:16, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalYearNextO.png")] = { width:16, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_Calbg.png")] = { width:352, height:83 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_Attachment.png")] = { width:7, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Menu08.png")] = { width:24, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_MenuClose.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_MenuCloseO.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_MenuOpen.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_MenuOpenO.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Voc.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_NewO.png")] = { width:18, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Logout.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_LogoutO.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Next.png")] = { width:6, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Prev.png")] = { width:6, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_User.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_UserO.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalClose.png")] = { width:51, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalOpen.png")] = { width:51, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalToday.png")] = { width:38, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CrudAdd.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CrudDelete.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CrudSave.png")] = { width:13, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Full.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Help.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Normal.png")] = { width:15, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Print.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Refresh.png")] = { width:14, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RefreshD.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SearchD.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_TempSave.png")] = { width:18, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_MF_Dot.png")] = { width:5, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtn.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtnD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtnO.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtn.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtnD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtnO.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxE.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/frm_WF_HDecBtn.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/frm_WF_HIncBtn.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/frm_WF_VDecBtn.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/frm_WF_VIncBtn.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeClose02.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeOpen02.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_MF_Dot01.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_MF_Dot02.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_MF_Dot03.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_Scroll_Bg.png")] = { width:17, height:33 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_TF_Favlist.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_Nodata.png")] = { width:91, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeChk.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeChkS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_POP_Alert.png")] = { width:53, height:53 };
        		imgcache[nexacro._getImageLocation("theme://images/img_POP_Confirm.png")] = { width:53, height:53 };
        		imgcache[nexacro._getImageLocation("theme://images/img_POP_Error.png")] = { width:53, height:53 };
        		imgcache[nexacro._getImageLocation("theme://images/img_POP_Warning.png")] = { width:53, height:53 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Expand.png")] = { width:33, height:33 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpandS.png")] = { width:33, height:33 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PmnuIcon.png")] = { width:10, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/mobiletong.ico")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Item.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemO.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemSO.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_SchLabel.png")] = { width:23, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MaxO.png")] = { width:22, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_nexacro17.ico")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/Untitled-1.png")] = { width:60, height:87 };
	};
}
)();
