// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function Case1() {
  const length = parseFloat(document.getElementById("get_length").value)
  const height = parseFloat(document.getElementById("get_height").value)
  let ans = (length * height)
  document.getElementById("Ans").innerHTML = ans + "cm²"
}
function Case2() {
  const pi = "π"
  const radius = parseFloat(document.getElementById("get_radius").value)
  const height = parseFloat(document.getElementById("get_height").value)
  let ans = (length * height)
  document.getElementById("Ans").innerHTML = ans + "cm²"
}