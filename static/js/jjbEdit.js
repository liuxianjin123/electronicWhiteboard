var obj = {
    props: {
        isEdit: Boolean,
        editRowData: Object,
    },
    watch: {
        isEdit(n, o) {
            if (n) {
                if (Object.keys(this.editRowData).length > 10) {
                    this.form = JSON.parse(JSON.stringify(this.editRowData));
                }
            } else {
                //新增
                if (!this.editRowData) {
                    for (var i in this.form) {
                        if (i != "type" && i != "title" && i != "orderOfClassesId" && i != "handoverTime") {
                            this.form[i] = "";
                        }
                    }
                    this.form.isSucceed = false;
                    this.form.isHandover = false;
                    this.form.whiteboardDisplay = false;
                    this.form.id = null;
                }
            }
        },
        editRowData(n, o) {
            let obj = n;
            if (Object.keys(obj).length != 0) {
                if (Object.keys(obj).length < 11) {
                    for (var i in obj) {
                        if (i == "bcmc") {
                            this.form.bedNumber = obj[i] ? obj[i] : null;
                        }
                        if (i == "brxm") {
                            this.form.patientName = obj[i] ? obj[i] : null;
                        }
                        if (i == "brxb") {
                            this.form.brxb = obj[i] ? obj[i] : null;
                        }
                        if (i == "tmh") {
                            this.form.tmh = obj[i] ? obj[i] : null;
                        }
                        if (i == "zyh") {
                            this.form.zyh = obj[i] ? obj[i] : null;
                        }
                        if (i == "bqgc") {
                            this.form.dayShiftCondition = obj[i] ? obj[i] : null;
                        }
                        if (i == "brzd") {
                            this.form.diagnosis = obj[i] ? obj[i] : null;
                        }
                        if (i == "hx") {
                            this.form.p = obj[i] ? obj[i] : null;
                        }
                        if (i == "mb") {
                            this.form.r = obj[i] ? obj[i] : null;
                        }
                        if (i == "tw") {
                            this.form.t = obj[i] ? obj[i] : null;
                        }
                        if (i == "ybhd") {
                            this.form.oxygenSaturation = obj[i] ? obj[i] : null;
                        }
                        if (i == "ssy") {
                            this.form.bp = obj[i] ? obj[i] : null;
                        }
                        if (i == "szy") {
                            this.form.bp = this.form.bp + '/' + obj[i];
                        }

                    }
                } else {
                    this.form = JSON.parse(JSON.stringify(this.editRowData));
                    if (this.form.specialProperty !== undefined) {
                        this.form.specialProperty = this.form.specialProperty.split(',');
                    }
                }
            }
        },
        'form.zyh': {
            handler: function(val, oldVal) {
                setTimeout(() => {
                    this.esdd(val);
                }, 500)
            },
            // 深度观察
            deep: true
        }
    },
}

export default obj