Search.setIndex({docnames:["_autosummary/bricknil.ble_queue","_autosummary/bricknil.bricknil","_autosummary/bricknil.hub","_autosummary/bricknil.messages","_autosummary/bricknil.peripheral","_autosummary/bricknil.process","_autosummary/bricknil.sensor","api","authors","contributing","index","lego_api/duplo_train_color","lego_api/duplo_train_motor","lego_api/duplo_train_rgb_light","lego_api/duplo_train_speaker","lego_api/duplo_train_speedometer","lego_api/duplo_train_voltage","lego_api/external_motor","lego_api/internal_motor","lego_api/iv","lego_api/led","lego_api/lego","lego_api/remote_button","lego_api/tilt","lego_api/train_motor","lego_api/vision","readme"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["_autosummary/bricknil.ble_queue.rst","_autosummary/bricknil.bricknil.rst","_autosummary/bricknil.hub.rst","_autosummary/bricknil.messages.rst","_autosummary/bricknil.peripheral.rst","_autosummary/bricknil.process.rst","_autosummary/bricknil.sensor.rst","api.rst","authors.rst","contributing.rst","index.rst","lego_api/duplo_train_color.rst","lego_api/duplo_train_motor.rst","lego_api/duplo_train_rgb_light.rst","lego_api/duplo_train_speaker.rst","lego_api/duplo_train_speedometer.rst","lego_api/duplo_train_voltage.rst","lego_api/external_motor.rst","lego_api/internal_motor.rst","lego_api/iv.rst","lego_api/led.rst","lego_api/lego.rst","lego_api/remote_button.rst","lego_api/tilt.rst","lego_api/train_motor.rst","lego_api/vision.rst","readme.rst"],objects:{"":{bricknil:[7,0,0,"-"]},"bricknil.ble_queue":{BLEventQ:[0,1,1,""]},"bricknil.ble_queue.BLEventQ":{connect:[0,2,1,""],get_messages:[0,2,1,""],run:[0,2,1,""],send_message:[0,2,1,""]},"bricknil.bricknil":{attach:[1,1,1,""],start:[1,3,1,""]},"bricknil.hub":{BoostHub:[2,1,1,""],DuploTrainHub:[2,1,1,""],Hub:[2,1,1,""],PoweredUpHub:[2,1,1,""],PoweredUpRemote:[2,1,1,""]},"bricknil.hub.Hub":{attach_sensor:[2,2,1,""],char_uuid:[2,4,1,""],hubs:[2,4,1,""],message_queue:[2,4,1,""],peripheral_message_loop:[2,2,1,""],peripheral_queue:[2,4,1,""],peripherals:[2,4,1,""],send_message:[2,2,1,""],tx:[2,4,1,""],uart_uuid:[2,4,1,""]},"bricknil.messages":{Message:[3,1,1,""],UnknownMessageError:[3,5,1,""]},"bricknil.messages.Message":{handlers:[3,4,1,""],hub:[3,4,1,""],parse:[3,2,1,""],parse_attached_io:[3,2,1,""],parse_hub_properties:[3,2,1,""],parse_port_combo_value:[3,2,1,""],parse_port_information:[3,2,1,""],parse_port_mode_information:[3,2,1,""],parse_port_output_feedback:[3,2,1,""],parse_port_value:[3,2,1,""],port_info:[3,4,1,""]},"bricknil.peripheral":{Motor:[4,1,1,""],Peripheral:[4,1,1,""]},"bricknil.peripheral.Motor":{ramp_speed:[4,2,1,""],set_speed:[4,2,1,""]},"bricknil.peripheral.Peripheral":{activate_updates:[4,2,1,""],capabilites:[4,4,1,""],enabled:[4,4,1,""],message_handler:[4,4,1,""],port:[4,4,1,""],send_message:[4,2,1,""],sensor_name:[4,4,1,""],set_output:[4,2,1,""],thresholds:[4,4,1,""],update_value:[4,2,1,""],value:[4,4,1,""]},"bricknil.process":{Process:[5,1,1,""]},"bricknil.process.Process":{id:[5,4,1,""],message:[5,2,1,""],message_debug:[5,2,1,""],message_error:[5,2,1,""],message_info:[5,2,1,""],name:[5,4,1,""]},"bricknil.sensor":{Button:[6,1,1,""],DuploSpeaker:[6,1,1,""],DuploSpeedSensor:[6,1,1,""],DuploTrainMotor:[6,1,1,""],DuploVisionSensor:[6,1,1,""],InternalMotor:[6,1,1,""],InternalTiltSensor:[6,1,1,""],LED:[6,1,1,""],RemoteButtons:[6,1,1,""],TrainMotor:[6,1,1,""],VisionSensor:[6,1,1,""]},"bricknil.sensor.Button":{activate_updates:[6,2,1,""],allowed_combo:[6,4,1,""],capability:[6,1,1,""],datasets:[6,4,1,""]},"bricknil.sensor.Button.capability":{sense_press:[6,4,1,""]},"bricknil.sensor.DuploSpeaker":{activate_updates:[6,2,1,""],play_sound:[6,2,1,""],sounds:[6,1,1,""]},"bricknil.sensor.DuploSpeaker.sounds":{brake:[6,4,1,""],horn:[6,4,1,""],station:[6,4,1,""],steam:[6,4,1,""],water:[6,4,1,""]},"bricknil.sensor.DuploSpeedSensor":{allowed_combo:[6,4,1,""],capability:[6,1,1,""],datasets:[6,4,1,""]},"bricknil.sensor.DuploSpeedSensor.capability":{sense_count:[6,4,1,""],sense_speed:[6,4,1,""]},"bricknil.sensor.DuploTrainMotor":{speed:[6,4,1,""]},"bricknil.sensor.DuploVisionSensor":{allowed_combo:[6,4,1,""],capability:[6,1,1,""],datasets:[6,4,1,""]},"bricknil.sensor.DuploVisionSensor.capability":{sense_color:[6,4,1,""],sense_ctag:[6,4,1,""],sense_reflectivity:[6,4,1,""],sense_rgb:[6,4,1,""]},"bricknil.sensor.InternalMotor":{Port:[6,1,1,""],allowed_combo:[6,4,1,""],capability:[6,1,1,""],datasets:[6,4,1,""],ramp_speed2:[6,2,1,""],set_speed:[6,2,1,""]},"bricknil.sensor.InternalMotor.Port":{A:[6,4,1,""],AB:[6,4,1,""],B:[6,4,1,""]},"bricknil.sensor.InternalMotor.capability":{sense_pos:[6,4,1,""],sense_speed:[6,4,1,""]},"bricknil.sensor.InternalTiltSensor":{allowed_combo:[6,4,1,""],capability:[6,1,1,""],datasets:[6,4,1,""],orientation:[6,1,1,""],update_value:[6,2,1,""]},"bricknil.sensor.InternalTiltSensor.capability":{sense_acceleration_3_axis:[6,4,1,""],sense_angle:[6,4,1,""],sense_impact:[6,4,1,""],sense_orientation:[6,4,1,""],sense_tilt:[6,4,1,""]},"bricknil.sensor.InternalTiltSensor.orientation":{down:[6,4,1,""],far_side:[6,4,1,""],left:[6,4,1,""],near_side:[6,4,1,""],right:[6,4,1,""],up:[6,4,1,""]},"bricknil.sensor.LED":{set_color:[6,2,1,""]},"bricknil.sensor.RemoteButtons":{Button:[6,1,1,""],Port:[6,1,1,""],allowed_combo:[6,4,1,""],capability:[6,1,1,""],datasets:[6,4,1,""],minus_pressed:[6,2,1,""],plus_pressed:[6,2,1,""],red_pressed:[6,2,1,""]},"bricknil.sensor.RemoteButtons.Button":{MINUS:[6,4,1,""],PLUS:[6,4,1,""],RED:[6,4,1,""]},"bricknil.sensor.RemoteButtons.Port":{L:[6,4,1,""],R:[6,4,1,""]},"bricknil.sensor.RemoteButtons.capability":{sense_press:[6,4,1,""]},"bricknil.sensor.TrainMotor":{speed:[6,4,1,""]},"bricknil.sensor.VisionSensor":{allowed_combo:[6,4,1,""],capability:[6,1,1,""],datasets:[6,4,1,""]},"bricknil.sensor.VisionSensor.capability":{sense_ambient:[6,4,1,""],sense_color:[6,4,1,""],sense_count:[6,4,1,""],sense_distance:[6,4,1,""],sense_reflectivity:[6,4,1,""],sense_rgb:[6,4,1,""]},bricknil:{ble_queue:[0,0,0,"-"],bricknil:[1,0,0,"-"],hub:[2,0,0,"-"],messages:[3,0,0,"-"],peripheral:[4,0,0,"-"],process:[5,0,0,"-"],sensor:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:exception"},terms:{"05c5e50":26,"0x00":4,"0x01":4,"0x02":4,"0x03":4,"0x05":4,"0x11":4,"0x41":[4,6],"0x42":4,"0x45":4,"0x46":4,"0x51":4,"0x60":4,"0x61":4,"0x62":4,"0x81":4,"0xff":6,"100m":26,"16b":[11,15,16,19,21,25],"32b":[12,15,17,18,21,23,25],"\u0db1":26,"\u0dbd":26,"abstract":[0,4,6],"break":26,"byte":[0,3,4,6],"class":26,"const":[4,6,26],"default":9,"enum":6,"function":[4,5,9,11,12,13,14,15,20,21,25,26],"import":26,"int":[4,5,6],"long":6,"new":[9,26],"null":[11,21,25],"return":[4,6,21,22,26],"super":[5,6],"true":[2,4,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"while":26,Added:10,And:[6,26],DIS:[21,25],For:[4,6,26],POS:[17,18,21],The:[1,2,3,6,9,26],Then:[4,26],There:[6,26],Use:[4,6],Uses:[6,26],__main__:26,__name__:26,_convert_speed_to_v:6,abil:26,abl:26,about:[9,26],abov:[6,26],absolut:[11,12,13,15,16,19,20,21,24,25],accel:[10,21,23],acceleromet:[6,26],access:[6,26],accomplish:26,ack:4,activ:[4,6],activate_upd:[4,6],actual:[6,26],actuat:26,adafruit:[0,1,26],adafruit_bluefruit:0,adafruit_bluefruitl:[3,26],adafruit_python_bluefruitl:8,adapt:10,add:[2,4,9,10],adddress:2,address:[6,10,26],admit:26,advertis:26,after:26,again:26,ahead:26,akin:1,all:[0,1,2,3,4,5,6,9,26],allow:[6,26],allowed_combo:6,along:6,also:[0,5,26],alwai:[6,9],amb:6,ambi:[21,25],angl:[6,21,23],ani:[4,6,9,26],anoth:26,anyth:[5,6,9,26],anytim:26,api:[10,26],appear:6,append:4,appreci:9,appropri:2,arbitrari:26,architectur:10,argument:[6,26],around:6,articl:9,asid:26,asl2:26,asl:26,assum:9,async:[1,5,6,10,26],asynchron:26,asyncio:26,attaach:6,attach:[1,2,4,6,26],attach_sensor:2,attr:2,avail:6,awai:[0,6],await:[6,26],axi:6,back:[1,4,6,26],background:26,backward:26,base:[0,1,2,3,4,5,6,10,26],basi:26,basic:6,basicconfig:26,beazlei:26,becaus:[4,10,26],becom:4,been:8,befor:[1,4,9,26],being:[21,22,26],believ:6,below:[6,26],best:9,better:26,between:26,bit:[4,6,9,26],bitmask:[21,22],ble:[0,1,2,10,26],ble_id:[2,26],ble_queu:[2,3],bleak:[0,8,10,26],bleventq:[0,2,3,4,6],blidh:8,blink:26,block:26,blog:9,blue:26,bluefruit:[0,26],bluetooth:[0,1,3,10],bluetoothl:[2,8,26],bluez:26,bodi:6,bool:[2,4],boost:[2,4,6,10,18,19,21],boosthub:[2,26],both:6,bound:6,brake:[4,6,26],branch:9,bricknil:[7,8,9],broadcast:2,btle:10,btn:26,btns_left:26,btns_left_chang:26,btns_right:26,btns_right_chang:26,buffer:4,bugfix:9,build:10,built:[6,9,26],button:[6,10,22],bytearrai:[0,3],bytes_per_dataset:6,calib:[11,15,21,23,25],call:[0,1,2,3,4,6,26],callback:[0,1,3,4,26],can:[4,6,9,21,22,26],cancel:4,capabilit:4,capabl:[1,4,6,26],care:[1,26],cargo:2,cargotrain:26,caus:6,chang:[3,4,6,9,10,26],char_uuid:2,characterist:[0,2],check:[1,6,9,26],checkout:9,choic:26,clone:9,close:26,closer:[6,26],closest:6,cnt:[15,21,25],code:[4,6,26],col:[6,13,20,21,25],color:[4,6,10,11,25],com:[8,9,26],combin:[4,6,11,15,17,18,21,23,25],combinedmod:4,come:[4,26],comm:0,command:[4,6,26],commit:9,common:4,commun:[1,2,3,8,26],complet:26,complic:4,compon:26,conceiv:26,concurr:26,condit:26,connect:[0,1,2,4,6,10],consist:26,contain:[3,26],contribut:10,contributor:10,control:[1,10],convert:6,copi:9,coroutin:[10,26],correct:1,could:[4,9,26],count:[6,15,21,25,26],cours:26,coverag:[9,10],creat:[9,26],credit:[9,10],cross:26,ctag:6,cur:[19,21],curio:[1,2,3,26],current:[6,10,19,26],cycl:26,data:[0,4,6],dataset:[4,6,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],dataset_decim:[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],dataset_total_figur:[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],dataset_typ:[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],david:26,dbu:8,debug:[5,21,25],decel:10,decor:[1,2],def:[6,26],defin:[4,6,26],definit:6,depend:[0,4,26],deploi:9,dequ:3,descript:[4,9],design:26,detail:[4,9],detect:26,dev:9,develop:10,devic:[0,4,6,26],dicola:8,dict:[2,3,4,6,26],dictionari:26,differ:[4,6,26],difficult:10,direct:3,directli:26,disclaim:10,discret:[11,13,14,20,21,25],discuss:26,dispatch:2,distanc:[6,26],distribut:26,doc:9,docstr:9,document:[6,10,26],doe:5,don:[4,6],done:[4,9],down:6,driven:9,dump:4,duplo:[2,6,10,11,12,14,15],duplospeak:6,duplospeedsensor:6,duplotrainhub:2,duplotrainmotor:6,duplovisionsensor:6,durat:26,dure:26,each:[3,4,5,6,26],easi:26,easier:9,easiest:4,either:[4,6,26],ekanayak:8,elif:26,els:26,enabl:[1,4,6,26],end:[4,26],enough:26,ensur:[1,3,26],entir:26,entri:[1,4],enumer:6,environ:9,error:5,etc:26,eurobrick:26,even:[6,9],event:[1,3,5,26],everi:[9,26],everyth:[1,26],exampl:[1,4,6,10],exce:6,except:3,exclus:3,execut:[1,4,26],exit:26,explain:9,explan:4,express:26,extern:[10,17],fab:9,fabric:9,face:6,facilit:26,fairli:26,fake:6,fals:[2,26],far_sid:6,faster:[3,26],featur:10,feed:26,feedback:4,few:6,field:4,figur:10,file:9,find:26,finish:26,first:[2,4,6,10,26],five:6,fix:10,flag:26,flat:6,follow:[4,6,8,26],forc:26,fork:9,format:[4,6],former:26,forward:26,found:[2,4],free:26,from:[0,2,3,4,6,26],front:[6,26],full:26,fulli:26,func:4,further:10,furthest:6,futur:[3,4],gave:8,get:[4,6,10,26],get_messag:[0,3,6],git:9,github:[9,26],githubdoc:9,given:[4,6,9,26],gmail:8,going:[5,6,26],gradual:26,greater:26,greatli:[8,9],green:26,ground:6,guidelin:10,hack:6,hand:[6,26],handl:4,handler:[1,2,3,6],happen:[3,26],hard:[4,6],hardwar:6,has:[1,3,4,6,26],have:[4,6,8,9,10,26],header:[0,4],help:9,helper:[5,6,26],henrik:8,here:[4,9,26],his:8,horn:6,host:9,hotfix:10,how:[4,6,10,26],howev:[3,4],html:9,http:[9,26],hub:[0,1,3,4,6,10,18,19],hub_btn:6,hub_l:6,human:[2,4,5],identifi:1,idx:[11,14,21,25],im_cf:[21,23],immedi:4,impact:6,impct:[21,23],implement:26,impli:26,inch:[6,26],includ:[1,4,9,26],incom:[0,2,3,4],incorpor:8,increas:26,indebt:8,index:[6,10,26],info:[5,26],inform:[2,3,10],initi:1,inject:1,input:[4,6,11,12,15,16,17,18,19,21,22,23,25],input_map:[11,12,13,14,15,16,19,20,21,24,25],insert:[0,2,6],insid:[1,3,26],inspir:26,instal:[9,10],instanc:[0,1,2,3,5,6,26],instanti:[1,26],instead:[3,6,26],integ:4,integr:10,intenaltiltsensor:6,intens:2,intenum:6,interfac:[0,1,2],intern:[6,10,18,23,26],internalmotor:[6,26],internaltiltsensor:6,interv:26,invers:[6,26],invok:9,is_minus_press:6,is_plus_press:6,is_red_press:6,isn:26,issu:[4,9,10,26],item:[4,6],itertool:26,its:[3,5,6],just:[1,4,6,9,26],keep:[2,5,6,9,26],keep_run:26,keya:[21,22],keyd:[21,22],keyr:[21,22],keysd:[6,21,22],keyword:26,kind:26,kit:26,kludg:26,know:26,kwarg:1,land:3,latter:26,lead:10,led:[6,10],left:[6,21,22,26],left_button:6,left_buttons_chang:6,left_motor:6,lego:[2,4,6,10],length:0,let:26,level:[5,26],librari:[0,3,8,26],licens:[8,26],light:[6,13,20],like:[4,6,26],linux:[0,8,10,26],list:[2,3,4,6,9,26],listen_remot:26,littl:9,local:9,lock:4,log:[2,5,26],logic:26,look:[9,10,26],loop:[1,2,5],lower:[4,5],lpf2:[21,24],lying:6,mac:[0,2,8,26],mai:[3,4,26],main:[1,2,3,7,26],maintain:26,make:[1,6,9,26],makefil:9,manag:26,mani:[4,9,26],map:[6,11,12,13,14,15,20,21,25],mark:4,match:[1,2,4,26],mean:[4,26],measur:[6,26],meet:9,mesaur:6,messag:[0,2,4,5,6,26],message_debug:5,message_error:5,message_handl:4,message_info:[5,26],message_queu:2,method:[1,3,6,26],might:9,millisecond:26,minu:6,minus_press:[6,26],mkvirtualenv:9,mock:10,mode:[3,4,6,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],mode_combin:[11,15,17,18,21,23,25],modern:26,modul:10,more:[4,9,26],most:4,mot:[12,21],motion:26,motor:[1,4,6,10,12,17,18,24],motor_left:26,motor_right:26,motor_spe:26,motors_chang:6,move:[2,6,26],msg:[0,3,4,26],msg_byte:[2,3,4,6],msg_level:26,msg_name:2,much:[6,26],multipl:[4,21,22],multitud:26,must:[0,6],name:[1,2,4,5,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],narrow:9,near_sid:6,need:[1,4,5,6,10,26],neg:[4,26],nest:26,network:[2,10,26],neutral:4,newer:26,next:26,nibbl:4,nice:26,nil:26,nine:6,nodej:26,none:[2,4,6],note:[6,10,26],noth:[21,22],notic:26,notif:6,notifi:6,now:[3,4,6,9,26],num_dataset:6,number:[4,6,26],numer:5,object:[0,1,3,5,26],offici:[4,9],onc:26,one:[2,4,6],onli:[2,4,6,26],onsec:[12,21],onto:1,open:[8,9,26],oper:[3,6,9],or_cf:[21,23],orang:26,order:[4,6,26],org:9,orient:[6,26],origin:9,orint:[21,23],other:[6,26],otherwis:[4,6],our:[2,26],out:[4,10,26],outgo:[2,4],output:[4,6,12,13,14,17,18,20,21,24,25,26],output_map:[11,12,13,14,15,16,19,20,21,24,25],over:[6,8,26],own:3,packag:9,page:[9,10],parallel:26,paramet:[0,1,2,3,4,6],pars:[0,3,4],parse_attached_io:[3,4],parse_hub_properti:3,parse_port_combo_valu:3,parse_port_inform:3,parse_port_mode_inform:3,parse_port_output_feedback:3,parse_port_valu:3,parser:[2,3,4],part:[4,9],particular:26,pass:[1,9,26],pct:[21,25],pct_rang:[11,12,13,14,15,16,19,20,21,24,25],percentag:6,peripher:[1,2,3,6,26],peripheral_message_loop:[2,4],peripheral_queu:[2,3],peripheral_typ:1,peripheralname_chang:1,peripheraltyp:1,person:8,physic:[1,4,26],pick:6,pip:[9,26],plai:6,platform:26,play_sound:6,pleas:[9,26],plu:6,plug:26,plus_press:[6,26],point:[1,26],pop:3,port:[1,2,3,4,6,18,19,21,22,26],port_info:3,portion:8,posit:6,possibl:[9,10],post:9,power:[6,17,18,21,26],poweredhub:6,poweredup:[1,2,4,6,10],powereduphub:[2,26],poweredupremot:[2,26],practic:26,preceed:6,predefin:6,prefer:26,prepend:0,preset:6,press:[6,21,22,26],previou:26,print:[5,26],process:[0,2,4,26],profil:10,program:26,progress:4,project:[8,9],properti:6,propos:9,protocol:[4,6,10],provid:[0,4,5,6,8,26],prox:[21,25],proxim:6,pull:10,pull_request:9,pup:[19,21],pure:[1,8],purpl:26,push:[9,21,22,26],put:[1,4,9,26],pwr:[12,21],python:[8,9,10],queri:2,query_port_info:2,queue:[0,1,2,4,26],queur:3,quit:26,radio:26,ramp:[4,6,26],ramp_spe:[4,26],ramp_speed2:6,ramp_time_m:[4,6],rang:[4,26],raspberri:26,raw:[3,4,6,11,21,25],raw_rang:[11,12,13,14,15,16,19,20,21,24,25],rckei:[21,22],read:4,readabl:[2,4,5],readi:[9,26],readm:9,reason:6,receiv:2,receive_messag:0,red:[4,6,21,22],red_press:6,reduc:26,reflect:6,reflt:[6,11,21,25],regist:6,regular:26,rel:[12,15,21,24,25],releas:10,rememb:9,remot:[2,6,10,22],remotebutton:[6,26],repeat:26,repo:9,report:6,repres:[4,6],reproduc:9,request:[0,10],requir:[9,26],respect:[4,8],respond:26,rest:1,rev:6,revers:[4,26],revolut:6,rgb:[4,6,11,13,20,25],right:[6,21,22,26],robot:26,rotat:6,rough:6,roughli:[6,26],routin:[1,26],row:4,rpi:10,rst:9,rudimentari:26,run:[0,1,3,6],run_test:9,safeti:[3,26],sai:26,same:[6,21,22,26],saniti:6,scope:9,search:10,sec:[12,21],second:[6,26],section:26,see:[4,6,9,26],seem:[4,6],seen:4,self:[4,6,26],send:[0,3,4,6,9,26],send_messag:[0,2,4],sens:[1,4,6,10,26],sense_acceleration_3_axi:6,sense_ambi:6,sense_angl:6,sense_color:[4,6],sense_count:[6,26],sense_ctag:6,sense_dist:[4,6,26],sense_distannc:4,sense_impact:6,sense_orient:6,sense_po:6,sense_press:[6,26],sense_reflect:6,sense_rgb:6,sense_spe:6,sense_tilt:6,sensor:[1,2,4,10,25],sensor_chang:26,sensor_id:4,sensor_nam:4,separ:26,sequenc:[4,26],servic:2,set:[2,4,6,9,26],set_color:[6,26],set_output:[4,6],set_spe:[4,6,26],setup:[0,4,6,9],should:[3,9,26],show:26,shown:26,si_rang:[11,12,13,14,15,16,19,20,21,24,25],side:[6,21,22],signal:26,simpl:10,simplic:4,sinc:[6,10],singl:[4,6],singleton:0,sinhala:26,sit:6,sleep:26,slight:6,snd:[14,21],snensor:26,softwar:26,some:[5,6,26],someth:26,soon:26,sound:[6,10,14,21],sourc:[0,1,2,3,4,5,6,8,26],spd:[15,21],speak:26,speaker:[6,10,14],special:6,specif:10,specifi:1,speed:[4,6,10,15,17,18,21,26],speed_sensor:6,speedomet:[6,15],spun:6,stack:8,stai:26,stand:6,standalon:6,start:[1,10,26],state:6,statement:26,station:6,steam:[2,6],step:9,stop:[6,26],store:6,str:[0,2,4,5],straightforward:26,strictli:6,string:1,sub:[1,26],subclass:[2,3,5,26],submodul:10,substitut:6,support:[1,4,6,9,10,11,12,13,14,15,20,21,25,26],suppos:26,sure:[1,6,9,26],symbol:[11,12,13,14,15,16,19,20,21,24,25],synchroniz:[18,21],syntax:26,system:[1,3,9,10,21,24,26],tabl:4,tacho:[10,17,18,21],tag:[6,9,11,21],take:[1,26],target:26,target_spe:[4,6],task:[5,9,26],task_don:26,tell:[21,22,26],tell_robot:26,term:8,test:[9,26],than:[5,6,26],thei:9,them:[6,9],thi:[0,1,2,3,4,5,6,8,9,10,26],thing:26,those:26,though:6,thread:[3,26],three:[4,6,26],threshold:[4,6],through:[0,3,6,9,26],thu:26,tilt:[6,10,23,26],time:[4,6,26],todo:[3,9],tone:[14,21],toni:8,too:26,top:[6,26],tox:9,track:[2,5,6],train1:26,train2:26,train3:26,train:[2,4,6,10,11,12,14,15,24],train_btn:26,train_btn_chang:26,train_l:26,train_sensor:26,train_sensor_chang:26,trainmotor:[6,26],translat:6,travi:9,treat:6,trigger:[4,6],trio:26,troubleshoot:9,tupl:[0,4],turn:26,two:[6,18,21,22,26],txt:9,type:[2,3,4,5,6,26],uart:2,uart_uuid:2,uint16:6,uint32:6,uint8:6,under:[6,8,26],underli:0,uniqu:5,unit:[4,6],universalqueu:[2,3],unknownmessageerror:3,unless:4,unlik:6,unlock:4,untest:26,until:26,updat:[1,3,4,6,9,26],update_valu:[3,4,6],upper:4,upsid:6,use:[3,4,6,9,26],used:[6,26],useful:26,user:[1,26],user_system_setup_func:1,uses:[2,4,26],using:[0,6,26],util:[1,4],utilti:5,uuid:[0,2,10,26],valid:4,valu:[3,4,6,21,22,26],variabl:[1,2,6,26],variou:[5,6],veri:2,version:9,via:[4,26],video:26,virantha:[8,9,26],virtual:6,virtualenv:9,virtualenvwrapp:9,vision:[6,10,25],visionsensor:[6,26],vlt:[16,19,21],voltag:[10,16,19],volunt:9,wai:[4,8,9,26],wait:[2,26],want:[2,3,4,6,9,26],warranti:26,wasn:26,water:6,wave:[6,26],web:9,websit:9,wedo:4,welcom:[7,9],well:8,were:26,what:26,whatev:26,wheel:6,when:[2,4,6,9,21,22],whenev:26,where:[4,26],whether:[6,9],which:[1,4,8,26],whoever:9,whole:1,width:4,win10:[0,10,26],wireless:10,within:6,withina:6,without:26,word:26,work:[9,26],would:[4,9],write:0,writedirectmodedata:4,xxxx:26,xxxxx:26,xxxxxxxxxxxx:26,yellow:26,yet:6,you:[1,2,4,6,9,26],your:[1,6,9,26],your_name_her:9,yyyi:26,yyyyyyyyyyyi:26,zero:4,zzzz:26,zzzzzzzzzzzz:26},titles:["bricknil.ble_queue","bricknil.bricknil","bricknil.hub","bricknil.messages","bricknil.peripheral","bricknil.process","bricknil.sensor","API Documentation","Credits","Development","BrickNil Docs (version 0.6)","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","Notes on LEGO wireless BLE protocol","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","BrickNil - Control LEGO Bluetooth Sensors and Motors with Python"],titleterms:{"class":[0,1,2,3,4,5,6],"function":1,api:7,architectur:26,ble:21,ble_queu:0,bluetooth:26,boost:26,bricknil:[0,1,2,3,4,5,6,10,26],bug:9,build:26,button:[21,26],changelog:10,color:[21,26],connect:26,content:10,contribut:9,contributor:8,control:26,credit:8,current:21,develop:[8,9],disclaim:26,doc:10,document:[7,9],duplo:21,exampl:26,extern:21,featur:[9,26],feedback:9,fix:9,further:26,get:9,guidelin:9,how:9,hub:[2,21,26],implement:9,indic:10,inform:21,instal:26,integr:26,intern:21,lead:8,led:[21,26],lego:[21,26],light:21,list:10,loop:26,member:[0,1,2,3,4,5,6],messag:3,motor:[21,26],note:21,peripher:4,poweredup:26,process:5,protocol:21,pull:9,python:26,remot:[21,26],report:9,request:9,rgb:21,run:26,sensor:[6,21,26],simpl:26,speaker:21,specif:26,speedomet:21,start:9,submit:9,submodul:7,tabl:10,test:10,tilt:21,todo:10,train:[21,26],verni:26,version:10,vision:[21,26],voltag:21,wireless:21,write:9}})