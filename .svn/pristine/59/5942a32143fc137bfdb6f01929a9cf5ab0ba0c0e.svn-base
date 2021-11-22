<template>
  <div class="box">
    <header>
      <div class="heads">
        <span>
          {{ $store.state.dataType == 0 ? "全部" : "本人" }}
        </span>
        <ul class="itemBox">
          <template>
            <li
              class="topDataItem"
              v-for="(item, index) in topDataList"
              :key="index"
              :style="{
                border:
                  $store.state.dataType == 0
                    ? '2px dotted #f59a23'
                    : '2px dotted #1e9fff',
              }"
            >
              <p>
                <span>{{ item.title }}</span>
              </p>
              <p>{{ item.num }}人</p>
            </li>
          </template>
        </ul>
      </div>
    </header>
    <div class="anchor">
      <template>
        <a-anchor
          :affix="true"
          :getContainer="() => this.$refs.questionnaireBox"
        >
          <template v-for="i in showItem">
            <a-anchor-link
              :href="'#' + i.name"
              :title="i.title.substr(0, 2)"
              :key="i.name"
              v-if="i.isEnable"
            />
          </template>
        </a-anchor>
      </template>
    </div>
    <section>
      <div class="tableBox" ref="questionnaireBox">
        <ul style="height: 100%">
          <li
            v-for="(item, index) in showItem"
            :key="index"
            class="lis"
            :id="item.name"
          >
            <template v-if="item.isEnable">
              <div class="titles">
                <div>
                  <i></i>
                  <span
                    ><b>{{ item.title }}</b></span
                  >
                </div>
                <div class="title-group">
                  <div class="title-btn1" v-if="!$store.state.createJbsj">
                    <a-button
                      v-if="$store.state.isjj"
                      type="danger"
                      style="background: orange; border-color: orange"
                      :data-type="item.name"
                      @click="addRowData(item.name, item.title)"
                    >
                      增加{{ item.title }}
                    </a-button>
                    <a-button
                      type="primary"
                      :data-type="item.name"
                      :disabled="!hasGroupName(item.name)"
                      @click="submintClass(item.name, '', 1)"
                    >
                      {{
                        $store.state.isjj ? "批量交班" : "批量接班"
                      }}</a-button
                    >
                  </div>
                  <div v-if="$store.state.createJbsj">
                    <a-button
                      type="primary"
                      :data-type="item.name"
                      :disabled="!hasGroupName(item.name)"
                      @click="submintClass(item.name, '', 1)"
                    >
                      批量生成</a-button
                    >
                  </div>
                </div>
              </div>
              <template>
                <a-table
                  :columns="isColumns(item.columns).column"
                  :data-source="isColumns(item.columns).datas"
                  bordered
                  :pagination="false"
                  :customRow="rowClick"
                  size="small"
                  :scroll="{ x: '100%', y: 'calc(100vh - 338px)' }"
                  :rowKey="
                    (record, index) => {
                      return index;
                    }
                  "
                  :row-selection="{
                    selectedRowKeys: isColumns(item.columns).selectA,
                    onChange: isColumns(item.columns).selectChange,
                    columnWidth: 40,
                  }"
                >
                  <template slot="tw" slot-scope="text, record">
                    <span :style="{ color: setItemColor(0, record.t) }">
                      {{ record.t }}
                    </span>
                  </template>
                  <template slot="p" slot-scope="text, record">
                    <span :style="{ color: setItemColor(2, record.p) }">
                      {{ record.p }}
                    </span>
                  </template>
                  <template slot="r" slot-scope="text, record">
                    <span :style="{ color: setItemColor(1, record.r) }">
                      {{ record.r }}
                    </span>
                  </template>
                  <template slot="spo2" slot-scope="text, record">
                    <span
                      :style="{
                        color: setItemColor(3, record.oxygenSaturation),
                      }"
                    >
                      {{ record.oxygenSaturation }}
                    </span>
                  </template>
                  <template slot="address" slot-scope="text, record">
                    <div v-if="!$store.state.createJbsj">
                      <a @click.stop="submintClass(item.name, record, 0)"
                        ><a-icon type="interaction" />{{
                          $store.state.isjj ? "交班" : "接班"
                        }}</a
                      >
                      <template v-if="$store.state.isjj">
                        <template>
                          <a-popconfirm
                            title="确认删除?"
                            ok-text="确认"
                            cancel-text="取消"
                            @confirm="deleteClass(record)"
                          >
                            <a style="color: red" @click.stop="">
                              <a-icon type="delete" theme="filled" /> 刪除</a
                            >
                          </a-popconfirm>
                        </template>
                      </template>
                    </div>
                    <a
                      @click.stop="submintClass(item.name, record, 0)"
                      v-if="$store.state.createJbsj"
                      ><a-icon type="interaction" />生成交班</a
                    >
                  </template>
                </a-table>
              </template>
            </template>
          </li>
        </ul>
      </div>
    </section>
    <a-drawer
      :title="!isEdit ? '新增' + editItemText : '编辑' + editItemText"
      placement="right"
      :closable="false"
      :visible="drawerVisible"
      @close="onDrawerClose"
      :width="450"
      style="height: 100%;z-index=800"
    >
      <div
        style="height: calc(100% - 60px); overflow-y: auto; overflow-x: hidden"
      >
        <xrbr-form
          v-on:openxrbr="openxrbr"
          v-if="editItem == 'hlShioverNewPatientDtos'"
          @ruquestData="ruquestData"
          :isEdit="isEdit"
          :editRowData="editRowData"
          ref="hlShioverNewPatientDtos"
        ></xrbr-form>
        <cybr-form
          v-on:openxrbr="openxrbr"
          v-if="editItem == 'hlShioverDischargedPatientDtos'"
          @ruquestData="ruquestData"
          :isEdit="isEdit"
          :editRowData="editRowData"
          ref="hlShioverDischargedPatientDtos"
        ></cybr-form>
        <ssbr-form
          v-on:openxrbr="openxrbr"
          v-if="editItem == 'hlShioverSurgicalPatientDtos'"
          @ruquestData="ruquestData"
          :isEdit="isEdit"
          :editRowData="editRowData"
          ref="hlShioverSurgicalPatientDtos"
        ></ssbr-form>
        <bwbr-form
          v-on:openxrbr="openxrbr"
          v-if="editItem == 'hlShioverCriticallyIllPatientDtos'"
          @ruquestData="ruquestData"
          :isEdit="isEdit"
          :editRowData="editRowData"
          ref="hlShioverCriticallyIllPatientDtos"
        ></bwbr-form>
        <bzbr-form
          v-on:openxrbr="openxrbr"
          v-if="editItem == 'hlShioverSeriouslyIllPatientDtos'"
          @ruquestData="ruquestData"
          :isEdit="isEdit"
          :editRowData="editRowData"
          ref="hlShioverSeriouslyIllPatientDtos"
        ></bzbr-form>
        <tsbr-form
          v-on:openxrbr="openxrbr"
          v-if="editItem == 'hlShioverSpecialPatientDtos'"
          @ruquestData="ruquestData"
          :isEdit="isEdit"
          :editRowData="editRowData"
          ref="hlShioverSpecialPatientDtos"
        ></tsbr-form>
        <yjbr-form
          v-on:openxrbr="openxrbr"
          v-if="editItem == 'hlShioverFirstLevelNursingDtos'"
          @ruquestData="ruquestData"
          :isEdit="isEdit"
          :editRowData="editRowData"
          ref="hlShioverFirstLevelNursingDtos"
        ></yjbr-form>
      </div>
      <div
        style="height: 60px; line-height: 60px; text-align: center"
        v-if="$store.state.isjj"
      >
        <a-button type="primary" @click="mounitChildrenData">确认</a-button>
        <a-button type="danger" ghost @click="drawerVisible = false"
          >取消</a-button
        >
      </div>
    </a-drawer>
    <!-- 7.8胖纸 -->
    <a-modal
      class="xzhzkuang"
      style="edit_kuang"
      v-model="xrbrvisible"
      width="1000px"
      :title="'选择' + showItem[iszxhzindex].title"
      @ok="handleOk"
    >
      <nexreJbSelect
        :BrOrDatail="BrOrDatail"
        :brDataType="brDataType"
        :brZyh="brZyh"
        v-on:closexrbr="closexrbr"
      ></nexreJbSelect>
    </a-modal>
  </div>
</template>
<script>
import obj from "../../../../static/js/hljjb";
import { post, get, potdelete } from "../../../request/request";
import xrbrForm from "../../views/ChangeShifts/jjbModel/xrbrForm";
import cybrForm from "../../views/ChangeShifts/jjbModel/cybrForm";
import ssbrForm from "../../views/ChangeShifts/jjbModel/ssbrForm";
import bwbrForm from "../../views/ChangeShifts/jjbModel/bwbrForm";
import bzbrForm from "../../views/ChangeShifts/jjbModel/bzbrForm";
import tsbrForm from "../../views/ChangeShifts/jjbModel/tsbrForm";
import yjbrForm from "../../views/ChangeShifts/jjbModel/yjbrForm";
import nexreJbSelect from "../../views/ChangeShifts/jjbModel/nexreJb_Select";

export default {
  name: "nexreJb",
  data() {
    return {
      drawerVisible: false, //抽屉显示与隐藏
      topDataList: obj.topDataList, //顶部显示的所有项目数据
      showItem: obj.showItem, //护士选择了那些项目需要显示
      isEdit: false, //判断点击的新增按钮还是点击的tr编辑
      editItem: null, //编辑或者新增的哪一个项目，新入，病危，病重。。。
      editItemText: null, //
      editIndex: null, //编辑了数据的哪一条数据
      editRowData: null, //编辑哪一行数据具体内容
      visible: false,
      BrOrDatail: 1, //选择的病人列表还是详情界面
      brDataType: 0, //查询病人的类型，当前在院所有患者 0 新入患者 1 出院患者 2 病重患者 3 病危患者 4 一级护理 5 手术患者 6 特殊患者 7
      brZyh: null, //查询当前病人的所有护理记录体征数据，t,p,r,bp
      title1: "白班",
      title2: "夜班",
      dataType: "全科",
      valVerification: [], //体温，脉搏，呼吸项目的阈值显示
      showOption: false, //显示电梯
      //table对应的数据源JSON
      hlShioverNewPatientDtos: null,
      hlShioverDischargedPatientDtos: null,
      hlShioverSeriouslyIllPatientDtos: null,
      hlShioverCriticallyIllPatientDtos: null,
      hlShioverSpecialPatientDtos: null,
      hlShioverSurgicalPatientDtos: null,
      hlShioverFirstLevelNursingDtos: null,
      //table对应的数据表头JSON
      colxrhz: obj.colxrhz,
      colcyhz: obj.colcyhz,
      colbzhz: obj.colbzhz,
      colbwhz: obj.colbwhz,
      coltshz: obj.coltshz,
      colsshz: obj.colsshz,
      colyjhz: obj.colyjhz,
      //各个表格复选框对应的复选框选中的数据
      hlShioverNewPatientDtosRowKeys: [],
      hlShioverDischargedPatientDtosRowKeys: [],
      hlShioverSeriouslyIllPatientDtosRowKeys: [],
      hlShioverCriticallyIllPatientDtosRowKeys: [],
      hlShioverSpecialPatientDtosRowKeys: [],
      hlShioverSurgicalPatientDtosRowKeys: [],
      hlShioverFirstLevelNursingDtosRowKeys: [],
      // 7.8胖纸
      iszxhzindex: "0", //点击增加患者的index
      xrbrvisible: false, //选择患者是否弹出对话框
    };
  },
  methods: {
    //设置体温，脉搏，呼吸，等项目的阈值显示效果
    setItemColor(type, val) {
      let color = "";
      for (let i in this.valVerification) {
        if (this.valVerification[i].type == type) {
          let newType = this.judgeSymbolType(this.valVerification[i].symbol);
          if (newType == "<") {
            if (val < this.valVerification[i].value) {
              color = this.valVerification[i].colour;
            }
          }
          if (newType == "=") {
            if (val == this.valVerification[i].value) {
              color = this.valVerification[i].colour;
            }
          }
          if (newType == ">") {
            if (val > this.valVerification[i].value) {
              color = this.valVerification[i].colour;
            }
          }
          if (newType == "<=") {
            if (val <= this.valVerification[i].value) {
              color = this.valVerification[i].colour;
            }
          }
          if (newType == ">=") {
            if (val >= this.valVerification[i].value) {
              color = this.valVerification[i].colour;
            }
          }
        }
      }
      return color == "" ? "black" : color;
    },
    //返回判断上面函数中的symbol类型-0小于1等于2大于3小于等于4大于等于
    judgeSymbolType(type) {
      switch (type) {
        case 0:
          return "<";
          break;
        case 1:
          return "=";
          break;
        case 2:
          return ">";
          break;
        case 3:
          return "<=";
          break;
        case 4:
          return ">=";
          break;
      }
    },
    //获取顶部小框的各个类型的数据
    async getTopItemData(type) {
      const res = await get("/han/HandoverProc/GetPatientNumber/" + type);
      if (res.result) {
        for (let i in res.result[0]) {
          for (let y in this.topDataList) {
            if (i == this.topDataList[y].name) {
              this.topDataList[y].num = res.result[0][i];
            }
          }
        }
      } else {
        this.$message.error(res.msg);
      }
    },
    //获取交班的数据
    async getAlldeptData() {
      let res = null;
      if (this.$store.state.createJbsj) {
        res = await get(
          "/han/HandoverProc/GetSuccessionData/" + localStorage.handoverTime
        );
      } else {
        res = await get(
          "/han/HandoverProc/GetHandoverPatients?handoverTime=" +
            localStorage.handoverTime +
            "&orderOfClassesId=" +
            localStorage.orderOfClassesId
        );
      }
      if (res.result) {
        this.hlShioverNewPatientDtos = this.filterJbData(
          res.result.hlShioverNewPatientDtos
        );
        this.hlShioverDischargedPatientDtos = this.filterJbData(
          res.result.hlShioverDischargedPatientDtos
        );
        this.hlShioverSeriouslyIllPatientDtos = this.filterJbData(
          res.result.hlShioverSeriouslyIllPatientDtos
        );
        this.hlShioverCriticallyIllPatientDtos = this.filterJbData(
          res.result.hlShioverCriticallyIllPatientDtos
        );
        this.hlShioverSpecialPatientDtos = this.filterJbData(
          res.result.hlShioverSpecialPatientDtos
        );
        this.hlShioverSurgicalPatientDtos = this.filterJbData(
          res.result.hlShioverSurgicalPatientDtos
        );
        this.hlShioverFirstLevelNursingDtos = this.filterJbData(
          res.result.hlShioverFirstLevelNursingDtos
        );
        this.addField();
      } else {
        this.$message.error(res.msg);
      }
    },
    //判断当前是交班还是接班，返回对应的JSON数据
    filterJbData(data) {
      if (this.$store.state.createJbsj) {
        //如果是生成交班数据，直接不处理返回
        return data;
      } else {
        //否则的话需要区分哪些属于交班的数据
        let newArr = [];
        for (let i in data) {
          if (this.$store.state.isjj && !data[i].isHandover) {
            //目前属于交班状态并且isHandover字段为false为交班
            newArr.push(data[i]);
          }
          if (
            !this.$store.state.isjj &&
            data[i].isHandover &&
            !data[i].isSucceed
          ) {
            newArr.push(data[i]);
          }
        }
        return newArr;
      }
    },
    //获取设置中间区域的显示项目
    async getShowItem() {
      const res = await get("/han/Handover/GetShiftSetting", {});
      if (res.result) {
        this.valVerification = res.result.hlShioverOutlier;
        for (let i in res.result.hlShioverContent) {
          for (let y in this.showItem) {
            if (i == y) {
              this.showItem[y].isEnable =
                res.result.hlShioverContent[i].isEnable;
            }
          }
        }
      } else {
        this.$message.error(res.msg);
      }
    },
    //循环添加两个属性
    addField() {
      let arr = [
        {
          name: this.hlShioverNewPatientDtos,
          type: "hlShioverNewPatientDtos",
          title: "新入患者",
        },
        {
          name: this.hlShioverDischargedPatientDtos,
          type: "hlShioverDischargedPatientDtos",
          title: "出院患者",
        },
        {
          name: this.hlShioverSeriouslyIllPatientDtos,
          type: "hlShioverSeriouslyIllPatientDtos",
          title: "病重患者",
        },
        {
          name: this.hlShioverCriticallyIllPatientDtos,
          type: "hlShioverCriticallyIllPatientDtos",
          title: "病危患者",
        },
        {
          name: this.hlShioverSpecialPatientDtos,
          type: "hlShioverSpecialPatientDtos",
          title: "特殊患者",
        },
        {
          name: this.hlShioverSurgicalPatientDtos,
          type: "hlShioverSurgicalPatientDtos",
          title: "手术患者",
        },
        {
          name: this.hlShioverFirstLevelNursingDtos,
          type: "hlShioverFirstLevelNursingDtos",
          title: "一级患者",
        },
      ];

      for (let i = 0; i < arr.length; i++) {
        for (let y = 0; y < arr[i].name.length; y++) {
          arr[i].name[y].type = arr[i].type;
          arr[i].name[y].title = arr[i].title;
        }
      }
    },
    //监听新增数据
    addRowData(itemType, itemTitle) {
      //子项类型，子项名称
      this.isEdit = false; //表示新增
      this.editItem = itemType;
      this.editItemText = itemTitle;
      this.drawerVisible = true; //抽屉右侧划出
      this.editRowData = null; //既然是新增那这个肯定是空的
    },
    //监听对话框
    onDrawerClose() {
      this.drawerVisible = !this.drawerVisible;
    },
    //更新全局数据
    updateGroupData() {
      this.$message.success("厉害了");
    },
    rowClick(record, index) {
      //点击编辑行时方法
      return {
        on: {
          // 鼠标单击行
          click: (event) => {
            if (this.$store.state.createJbsj) {
              return false;
            } else {
              this.drawerVisible = true; //右侧编辑界面抽屉划出
              this.isEdit = true; //表示修改行数据
              this.editItem = record.type; //子项类型
              this.editItemText = record.title; //子项名称
              this.editIndex = index; //修改了子项数据集中的第几行
              this.editRowData = record; //将行数据当做参数传入到子页面方便修改查看
            }
          },
        },
      };
    },
    mounitChildrenData() {
      let _thisEdit = this.editItem;
      this.$refs[_thisEdit].onSubmit();
    },
    //触发新增
    ruquestData(obj) {
      this.insertItemData("jbDate", "Bid", obj);
    },
    //新增
    async insertItemData(jbDate, Bid, vals) {
      //交班时间，班次,修改&新增的数据
      let obj = {};
      let datas = vals.type; //获取数据的type当做变量当做数组容器
      let title = vals.type; //获取数据的type当做变量当做数组名称
      datas = []; //更改变量类型为Array
      datas.push(vals); //装数据
      obj[title] = datas; //为objs对象的键/值
      const res = await post(
        "/han/HandoverProc/SaveHandoverPatients?handoverTime=" +
          localStorage.handoverTime +
          "&orderOfClassesId=" +
          localStorage.orderOfClassesId,
        obj
      );
      if (res.result) {
        this.$message.success(res.msg);
        this.getAlldeptData();
        this.drawerVisible = false;
      } else {
        this.$message.error(res.msg);
      }
    },
    //提交数据&批量交班&生成交班
    async submintClass(type, rowData, isPl) {
      let isOk = false; //生成排班的时候判断重复数据，验证是否继续
      let obj = {};
      let datas = type;
      let title = type;
      let checkIndex = this[type + "RowKeys"];
      datas = [];
      if (isPl == 1) {
        for (let t in checkIndex) {
          datas.push(this[type][t]);
        }
        obj[title] = datas;
      } else {
        datas.push(rowData);
        obj[title] = datas;
      }
      let res;
      if (this.$store.state.isjj && !this.$store.state.createJbsj) {
        //表示交班
        isOk = true;
        res = await post("/han/HandoverProc/BatchShift", obj);
      } else if (!this.$store.state.isjj && !this.$store.state.createJbsj) {
        //接班
        isOk = true;
        res = await post("/han/HandoverProc/BatchSuccession", obj);
      } else if (this.$store.state.createJbsj) {
        //生成交班
        let _this = this;
        if (obj[title].length == 1) {
          if (obj[title][0].whetherToGenerate) {
            //单条数据验证是否已经被生成过了
            this.$confirm({
              title: "班次确认",
              content:
                "当前数据已经生成过了,确认生成会覆盖之前的当条数据,确认覆盖生成吗?",
              async onOk() {
                isOk = false;
                res = await post(
                  "/han/HandoverProc/CreateSuccessionShift?handoverTime=" +
                    localStorage.handoverTime +
                    "&orderOfClassesId=" +
                    localStorage.orderOfClassesId,
                  obj
                );
                _this.PreturnMsg(res, type);
              },
            });
          } else {
            res = await post(
              "/han/HandoverProc/CreateSuccessionShift?handoverTime=" +
                localStorage.handoverTime +
                "&orderOfClassesId=" +
                localStorage.orderOfClassesId,
              obj
            );
            this.PreturnMsg(res, type);
          }
        } else if (obj[title].length > 1) {
          let arr = [];
          for (let i in obj[title]) {
            if (obj[title][i].whetherToGenerate) {
              arr.push(new Number(i) + 1);
            }
          }
          if (arr.length >= 1) {
            //多条数据验证是否已经被生成过了
            this.$confirm({
              title: "班次确认",
              content:
                "当前数据集中的第" +
                arr.toString() +
                "条数据已经生成过了,确认生成会覆盖之前的当条数据,确认覆盖生成吗?",
              async onOk() {
                isOk = false;
                res = await post(
                  "/han/HandoverProc/CreateSuccessionShift?handoverTime=" +
                    localStorage.handoverTime +
                    "&orderOfClassesId=" +
                    localStorage.orderOfClassesId,
                  obj
                );
                _this.PreturnMsg(res, type);
              },
            });
          }
        }
      }
      if (isOk) {
        this.PreturnMsg(res, type);
      }
    },
    //上面函数的返回方法
    PreturnMsg(res, type) {
      if (res.result) {
        this.$message.success(res.msg);
        this.getAlldeptData();
        this[type + "RowKeys"].length = 0;
      } else {
        this.$message.success(res.msg);
        this[type + "RowKeys"].length = 0;
      }
    },
    //删除数据
    async deleteClass(rowData) {
      let obj = {};
      let datas = rowData.type; //获取数据的type当做变量当做数组容器
      let title = rowData.type; //获取数据的type当做变量当做数组名称
      datas = []; //更改变量类型为Array
      datas.push(rowData); //装数据
      obj[title] = datas; //为obj对象的键/值
      const res = await potdelete(
        "/han/HandoverProc/DeleteHandoverPatients",
        obj
      );
      if (res.result) {
        this.$message.success(res.msg);
        this.getAlldeptData();
      } else {
        this.$message.success(res.msg);
      }
    },
    isColumns(i) {
      //判断分组名，返回对应的表头
      let str = null;
      let dataList = null;
      let selectAyy = null;
      let selectChange = null;
      switch (i) {
        case "colxrhz":
          str = this.colxrhz;
          dataList = this.hlShioverNewPatientDtos;
          selectAyy = this.hlShioverNewPatientDtosRowKeys;
          selectChange = this.hlShioverNewPatientDtosChange;
          break;
        case "colcyhz":
          str = this.colcyhz;
          dataList = this.hlShioverDischargedPatientDtos;
          selectAyy = this.hlShioverDischargedPatientDtosRowKeys;
          selectChange = this.hlShioverDischargedPatientDtosChange;
          break;
        case "colbzhz":
          str = this.colbzhz;
          dataList = this.hlShioverSeriouslyIllPatientDtos;
          selectAyy = this.hlShioverSeriouslyIllPatientDtosRowKeys;
          selectChange = this.hlShioverSeriouslyIllPatientDtosChange;
          break;
        case "colbwhz":
          str = this.colbwhz;
          dataList = this.hlShioverCriticallyIllPatientDtos;
          selectAyy = this.hlShioverCriticallyIllPatientDtosRowKeys;
          selectChange = this.hlShioverCriticallyIllPatientDtosChange;
          break;
        case "coltshz":
          str = this.coltshz;
          dataList = this.hlShioverSpecialPatientDtos;
          selectAyy = this.hlShioverSpecialPatientDtosRowKeys;
          selectChange = this.hlShioverSpecialPatientDtosChange;
          break;
        case "colsshz":
          str = this.colsshz;
          dataList = this.hlShioverSurgicalPatientDtos;
          selectAyy = this.hlShioverSurgicalPatientDtosRowKeys;
          selectChange = this.hlShioverSurgicalPatientDtosChange;
          break;
        case "colyjhz":
          str = this.colyjhz;
          dataList = this.hlShioverFirstLevelNursingDtos;
          selectAyy = this.hlShioverFirstLevelNursingDtosRowKeys;
          selectChange = this.hlShioverFirstLevelNursingDtosChange;
          break;
        default:
          break;
      }
      return {
        column: str,
        datas: dataList,
        selectA: selectAyy,
        selectChange: selectChange,
      };
    },
    hasGroupName(name) {
      return this[name + "RowKeys"].length > 0;
    },
    hlShioverNewPatientDtosChange(selectedRowKeys, selectedRows) {
      this.hlShioverNewPatientDtosRowKeys = selectedRowKeys;
    },
    hlShioverDischargedPatientDtosChange(selectedRowKeys, selectedRows) {
      this.hlShioverDischargedPatientDtosRowKeys = selectedRowKeys;
    },
    bhlShioverSeriouslyIllPatientDtosChange(selectedRowKeys, selectedRows) {
      this.hlShioverSeriouslyIllPatientDtosRowKeys = selectedRowKeys;
    },
    hlShioverCriticallyIllPatientDtosChange(selectedRowKeys, selectedRows) {
      this.hlShioverCriticallyIllPatientDtosRowKeys = selectedRowKeys;
    },
    hlShioverSpecialPatientDtosChange(selectedRowKeys, selectedRows) {
      this.hlShioverSpecialPatientDtosRowKeys = selectedRowKeys;
    },
    hlShioverSurgicalPatientDtosChange(selectedRowKeys, selectedRows) {
      this.hlShioverSurgicalPatientDtosRowKeys = selectedRowKeys;
    },
    hlShioverFirstLevelNursingDtosChange(selectedRowKeys, selectedRows) {
      this.hlShioverFirstLevelNursingDtosRowKeys = selectedRowKeys;
    },
    // 7.8胖纸
    handleOk(e) {
      //编辑确定方法
      this.xrbrvisible = false;
    },
    closexrbr(msg) {
      this.assignment(msg);
      this.xrbrvisible = false;
    },
    assignment(record) {
      this.isEdit = true; //表示新增
      this.editRowData = record;
      this.drawerVisible = true;
    },
    openxrbr(type, dataType, zyh) {
      this.BrOrDatail = type;
      this.brDataType = dataType;
      (this.brZyh = zyh), (this.xrbrvisible = true);
    },
  },
  components: {
    xrbrForm,
    cybrForm,
    ssbrForm,
    bwbrForm,
    bzbrForm,
    tsbrForm,
    yjbrForm,
    nexreJbSelect,
  },
  computed: {
    updateGroupData1() {
      return this.$store.state.updateGroupData;
    },
    jbjb() {
      return this.$store.state.isjj;
    },
    AllOrIndividual() {
      return this.$store.state.dataType;
    },
    createJbsj() {
      return this.$store.state.createJbsj;
    },
  },
  watch: {
    //监听点击更新数据按钮
    updateGroupData1: function (old, newd) {
      if (old) {
        this.getAlldeptData();
        this.getTopItemData(this.$store.state.dataType);
        this.getShowItem();
        setTimeout(() => {
          this.$store.commit("updateGroupData", false);
        }, 2000);
      }
    },
    //点击显示顶部的全科数据或者本人
    AllOrIndividual: function (old, newd) {
      if (old == 1) {
        this.getTopItemData(1);
      } else {
        this.getTopItemData(0);
      }
    },
    jbjb: function (old, newd) {
      if (old) {
        this.getAlldeptData();
      } else {
        this.getAlldeptData();
      }
    },
    createJbsj: function (old, newd) {
      if (old) {
        this.getAlldeptData();
      } else {
        this.getAlldeptData();
      }
    },
  },
  mounted() {
    this.getAlldeptData();
    this.getTopItemData(0);
    this.getShowItem();
  },
};
</script>
<style scoped>
@import url("../../../../static/css/hlJJB.css");
</style>
