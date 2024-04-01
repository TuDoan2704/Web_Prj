import React, { useEffect, useState } from "react";
import Header from "./Header";
import TrangChu from "./TrangChu";
import Footer from "./Footer";
import DichVu from "./DichVu";
import VeChungToi from "./VeChungToi";
import DuAn from "./DuAn";
import DoiTac from "./DoiTac";

export default function MenuUser() {
  return (
    <div className="page-wrapper">
      <Header></Header>
      <TrangChu></TrangChu>
      <VeChungToi></VeChungToi>
      <DichVu></DichVu>
      <DuAn></DuAn>
      <DoiTac></DoiTac>

      <Footer></Footer>
    </div>
  );
}
