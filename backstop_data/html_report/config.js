report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Esc1_Step1_0_document_0_default.png",
        "test": "../bitmaps_test/20221116-220122/backstop_default_Esc1_Step1_0_document_0_default.png",
        "selector": "document",
        "fileName": "backstop_default_Esc1_Step1_0_document_0_default.png",
        "label": "Esc:1 Step:1",
        "requireSameDimensions": true,
        "misMatchThreshold": 8,
        "url": "./backstop_data/capturas/v5.19.0/v5.19.0_esc_1_step_1.png",
        "referenceUrl": "./backstop_data/capturas/v3.42/v3.42_esc_1_step_1.png",
        "expect": 0,
        "viewportLabel": "default",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 14.354583333333334,
          "misMatchPercentage": "14.35",
          "analysisTime": 39
        },
        "diffImage": "../bitmaps_test/20221116-220122/failed_diff_backstop_default_Esc1_Step1_0_document_0_default.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});