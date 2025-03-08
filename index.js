const jsonstring = {
  fields: [
    {
      name: "<<Tên dự án>>",
      type: "input",
      default_value: "Kiểm toán nội bộ 2025",
      editable: "True",
      data: [],
    },
    {
      name: "<<Mô tả dự án>>",
      type: "textarea",
      default_value: "Dự án kiểm toán nội bộ",
      editable: "True",
      data: [],
    },
  ],
};
console.log(JSON.stringify(jsonstring));
