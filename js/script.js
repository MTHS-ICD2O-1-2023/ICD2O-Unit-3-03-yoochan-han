// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html

function CaseTest() {
  const pi = "π"
  const radius = parseFloat(document.getElementById("get_radius").value)
  let ans = 4/3*((radius**3).toFixed(2))
  document.getElementById("progress1").innerHTML = "V = 4/3πr³(cm)"
  document.getElementById("progress2").innerHTML = "V = 4/3" + pi + radius + "³(cm)"
  document.getElementById("progress3").innerHTML = "V = 4/3" + pi + (radius**3).toFixed(2) + "(cm³)"
  document.getElementById("Ans").innerHTML = "V = " + ans.toFixed(2) + pi + "cm³"
}
