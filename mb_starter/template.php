<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks.
 */

function mb_starter_preprocess_html(&$variables) {
  drupal_add_css('GOOGLE_FONTS_CSS', array('type' => 'external'));
}
// remove a tag from the head for Drupal 7
function mb_starter_html_head_alter(&$head_elements) {
  unset($head_elements['system_meta_generator']);
}
