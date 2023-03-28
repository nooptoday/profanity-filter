#![deny(clippy::all)]

use napi_derive::napi;
use rustrict::{Censor, CensorStr, Type};

#[napi]
pub fn plus_100(input: u32) -> u32 {
  input + 100
}

#[napi]
pub fn censor(input: String) -> String {
  input.censor()
}
