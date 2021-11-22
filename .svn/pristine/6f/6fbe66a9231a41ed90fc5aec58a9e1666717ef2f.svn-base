<template>
  <div class="content">
    <a-table
      :data-source="data"
      :columns="columns"
      :customRow="rowClick"
      size="small"
      :scroll="{ x: '100%', y: 'calc(100vh - 170px)' }"
      @change="tableChange" 
      bordered
      :pagination="pagination"
      :loading="loading"
    >
      <div
        slot="filterDropdown"
        slot-scope="{
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
          column
        }"
        style="padding: 8px"
      >
        <a-input
          v-ant-ref="c => (searchInput = c)"
          :placeholder="`Search ${column.dataIndex}`"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block;"
          @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
          @pressEnter="
            () => handleSearch(selectedKeys, confirm, column.dataIndex)
          "
        />
        <a-button
          type="primary"
          icon="search"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          Search
        </a-button>
        <a-button
          size="small"
          style="width: 90px"
          @click="() => handleReset(clearFilters)"
        >
          Reset
        </a-button>
      </div>
      <a-icon
        slot="filterIcon"
        slot-scope="filtered"
        type="search"
        :style="{ color: filtered ? '#108ee9' : undefined }"
      />
      <template slot="title" >
        <a-button
          icon="plus-circle"
          class="editable-add-btn"
          @click="visible = !visible;editRowId='normal'"
          type="primary"
        >
          新 增
        </a-button>
      </template>
      <span slot="action" slot-scope="text, record, index">
        {{ parseInt(index) + 1 }}
      </span>
      <template slot="customRender" slot-scope="text, record, index, column">
        <span v-if="searchText && searchedColumn === column.dataIndex">
          <template
            v-for="(fragment, i) in text
              .toString()
              .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
          >
            <mark
              v-if="fragment.toLowerCase() === searchText.toLowerCase()"
              :key="i"
              class="highlight"
              >{{ fragment }}</mark
            >
            <template v-else>{{ fragment }}</template>
          </template>
        </span>
        <template v-else>
          {{ text }}
        </template>
      </template>
      <template slot="address" slot-scope="text, record">
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
    </a-table>
    <a-modal
      v-model="visible"
      :title="isEdit ? '白板字典设置-编辑' : '白板字典设置-新增'"
      width="700px"
      @ok="handleOk"
      @cancel="isEdit = false"
    >
      <dict-cofing-form ref="dictcofingform" :editRowId="editRowId"></dict-cofing-form>
    </a-modal>
  </div>
</template>
<script>
import dictCofingForm from "./dictConfigForm.vue";
const data = [];
for (let i = 0; i < 406; i++) {
  data.push({
    key: i,
    zdfl: `Edward King ${i}`,
    zdmc: `zdmc ${i}`,
    yzgjz: `yzgjz ${i}`,
    yzlb: `yzlb ${i}`,
    yztj: `yztj${i}`,
    yzpc: `yzpc ${i}`,
    yzsx: `yzsx ${i}`,
    sclx: `sclx ${i}`,
    zdsm: `zdsm ${i}`,
    cjsj: `cjsj ${i}`,
    xh: ` xh ${i}`,
    tz: ` tz ${i}`,
  });
}
export default {
  components: {
    dictCofingForm
  },
  data() {
    return {
      data,
      isEdit: false,//是否编辑状态
      visible: false,//控制子组件dialog的显隐
      searchText: "",//搜索字符串
      editRowId:"",//点击的行数据的ID
      searchInput: null,
      searchedColumn: "",
      loading: false,//表格loading
      pagination: {//表格分页组件
        total: data.length,  //数据总数
        current: 1,//当前页数
        defaultPageSize: 20,//默认每页显示10条数据
        showTotal: total => `共 ${total} 条数据`, // 展示总共有几条数据
        showSizeChanger: false, //显示修改pageSize的下拉框
        pageSizeOptions: ['20', '50'], //设置pageSize的可选值，页面啊可以通过下拉框进行选择
        onShowSizeChange: (current, pageSize) => this.pageSize = pageSize
      },
      columns: [
        {
          title: "序号",
          align: "center",
          width: 60,
          customRender:(text,record,index)=>`${(this.pagination.current-1)*this.pagination.defaultPageSize + (index+1)}`,
          fixed:"left"
        },
        {
          title: "字典分类",
          dataIndex: "zdfl",
          key: "zdfl",
          width: 150,
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.zdfl
              .toString()
              .toLowerCase()
              .includes(value.trim().toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          }
        },
        {
          title: "字典名称",
          dataIndex: "zdmc",
          key: "zdmc",
          width: 200
        },
        {
          title: "医嘱关键字(LIKE)",
          dataIndex: "yzgjz",
          key: "yzgjz",
          width: 200
        },
        {
          title: "医嘱类别(=)",
          dataIndex: "yzlb",
          key: "yzlb",
          width: 200
        },
        {
          title: "医嘱途径(=)",
          dataIndex: "yztj",
          key: "yztj",
          width: 200
        },
        {
          title: "医嘱频次(=)",
          dataIndex: "yzpc",
          key: "yzpc",
          width: 200
        },
        {
          title: "医嘱属性",
          dataIndex: "yzsx",
          key: "yzsx",
          width: 200
        },
        {
          title: "输出类型",
          dataIndex: "sclx",
          key: "sclx",
          width: 200
        },
        {
          title: "字典说明",
          dataIndex: "zdsm",
          key: "zdsm",
          width: 200
        },
        {
          title: "创建时间",
          dataIndex: "cjsj",
          key: "cjsj",
          width: 200
        },
        {
          title: "序号",
          dataIndex: "xh",
          key: "xh",
          width: 200
        },
        {
          title: "停止",
          dataIndex: "tz",
          key: "tz",
          width: 200
        },
        {
          title: "操作",
          width: 80,
          align: "center",
          fixed: "right",
          scopedSlots: { customRender: "address" }
        }
      ]
    };
  },
  methods: {
    rowClick(record, index) {
      //点击编辑行时方法
      return {
        on: {
          // 鼠标双击行
          dblclick: event => {
            this.visible = true;
            this.isEdit = true;
            this.editRowId =record.cjsj;
            this.$message.info(record.cjsj)
          }
        }
      };
    },
    //表格内部筛选
    handleSearch(selectedKeys, confirm, dataIndex) {
      confirm();
      this.searchText = selectedKeys[0];
      this.searchedColumn = dataIndex;
    },
    //清除表格内部的筛选
    handleReset(clearFilters) {
      clearFilters();
      this.searchText = "";
    },
    //删除行数据
    async deleteClass(rowData) {
      this.$message.success(JSON.stringify(rowData));
      // const res = await this.$axios.delete('/han/HandoverProc/DeleteHandoverPatients', obj);
      // if(res.result){
      //   this.$message.success(res.msg);
      //   this.getAlldeptData()
      // }else{
      //   this.$message.success(res.msg)
      // }
    },
    //dialog的确定按钮回调将提交子组件内部的表单
    handleOk(e) {
      console.log(e);
      this.visible = false;
      this.$refs.dictcofingform.onSubmit();
    },
    //table绑定change事件，方便页码组件进行分页
    tableChange(pagination, filters, sorter){
      this.pagination = pagination;
    },
  }
};
</script>
<style scoped>
.content {
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>
