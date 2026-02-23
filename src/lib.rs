#![deny(clippy::all)]

use napi_derive::napi;
use rustrict::CensorStr;

#[napi]
pub fn censor(input: String) -> String {
  input.censor()
}
