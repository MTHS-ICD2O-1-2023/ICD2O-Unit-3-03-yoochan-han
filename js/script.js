// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html

function CaseTest() {
  const pi = "π"
  const radius = parseFloat(document.getElementById("get_radius").value)
  let ans = 4/3*(radius**3)
  document.getElementById("Ans").innerHTML = ans + pi + "cm³"
}
