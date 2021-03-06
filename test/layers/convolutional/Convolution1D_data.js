// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

(function() {
  var DATA = {
    'convolutional.Convolution1D.0.legacy': {
      input: {
        data: [0.528281, -0.994279, -0.285153, 0.81939, -0.087838, 0.963605, 0.734714, 0.972055, 0.846533, -0.392613],
        shape: [5, 2]
      },
      weights: [
        {
          data: [
            0.895265,
            -0.546905,
            0.18884,
            -0.143383,
            0.528281,
            -0.994279,
            -0.285153,
            0.81939,
            -0.087838,
            0.963605,
            0.734714,
            0.972055,
            0.846533,
            -0.392613,
            0.692207,
            -0.757556,
            0.571153,
            -0.49899,
            -0.807941,
            0.886982,
            0.6521,
            0.03665,
            0.747001,
            0.156751
          ],
          shape: [4, 2, 3, 1]
        },
        { data: [0.895265, -0.546905, 0.18884, -0.143383], shape: [4] }
      ],
      expected: {
        data: [
          1.124918,
          -0.342879,
          1.42759,
          -0.153716,
          0.251835,
          1.840331,
          -0.064904,
          1.390416,
          1.340388,
          1.266877,
          0.433117,
          1.831188
        ],
        shape: [3, 4]
      }
    },
    'convolutional.Convolution1D.1.legacy': {
      input: {
        data: [
          0.57107,
          0.361384,
          -0.924121,
          -0.417132,
          -0.39254,
          0.967698,
          -0.674584,
          0.924125,
          0.403362,
          0.417301,
          0.795356,
          -0.367641,
          -0.398474,
          0.889135,
          -0.81216,
          0.383587,
          0.922044,
          0.427167
        ],
        shape: [6, 3]
      },
      weights: [
        {
          data: [
            -0.772191,
            0.495762,
            0.222119,
            0.619384,
            0.425715,
            -0.719926,
            -0.464976,
            -0.704791,
            -0.543864,
            -0.528877,
            0.380048,
            -0.703304,
            -0.108788,
            0.401685,
            -0.806723,
            0.765265,
            0.739665,
            0.689188,
            -0.452596,
            0.571359,
            0.402272,
            -0.010539,
            0.672675,
            -0.191632,
            -0.653554,
            -0.269196,
            0.994178,
            -0.318691,
            0.010759,
            0.078695,
            -0.501326,
            0.625487,
            -0.614715,
            -0.839499,
            -0.811676,
            -0.300069
          ],
          shape: [4, 3, 3, 1]
        },
        { data: [0.895265, -0.546905, 0.18884, -0.143383], shape: [4] }
      ],
      expected: {
        data: [
          -1.877892,
          -0.642056,
          -0.468639,
          -1.365037,
          -0.876249,
          0.22855,
          -0.661939,
          -0.585044,
          1.423414,
          -0.225706,
          -0.233745,
          -0.120764,
          0.283789,
          -1.702796,
          1.034372,
          0.323189
        ],
        shape: [4, 4]
      }
    },
    'convolutional.Convolution1D.2.legacy': {
      input: {
        data: [
          0.18884,
          -0.143383,
          0.528281,
          -0.994279,
          -0.285153,
          0.81939,
          -0.087838,
          0.963605,
          0.734714,
          0.972055,
          0.846533,
          -0.392613,
          0.692207,
          -0.757556,
          0.571153,
          -0.49899,
          -0.807941,
          0.886982,
          0.6521,
          0.03665,
          0.747001,
          0.156751,
          -0.099831,
          0.360314
        ],
        shape: [4, 6]
      },
      weights: [
        {
          data: [
            0.895265,
            -0.546905,
            0.18884,
            -0.143383,
            0.528281,
            -0.994279,
            -0.285153,
            0.81939,
            -0.087838,
            0.963605,
            0.734714,
            0.972055,
            0.846533,
            -0.392613,
            0.692207,
            -0.757556,
            0.571153,
            -0.49899,
            -0.807941,
            0.886982,
            0.6521,
            0.03665,
            0.747001,
            0.156751,
            -0.099831,
            0.360314,
            -0.161149,
            0.280787,
            0.217313,
            -0.789132,
            0.932089,
            0.517401,
            0.359284,
            -0.341304,
            -0.94709,
            0.607321
          ],
          shape: [2, 6, 3, 1]
        },
        { data: [0.895265, -0.546905], shape: [2] }
      ],
      expected: { data: [0.444624, 0.773535, 0.564385, 0.133453], shape: [2, 2] }
    },
    'convolutional.Convolution1D.3.legacy': {
      input: {
        data: [
          0.330694,
          0.998309,
          0.786447,
          0.538158,
          -0.228315,
          0.217332,
          -0.475436,
          -0.018066,
          -0.489741,
          -0.522387,
          0.79989,
          0.27058,
          -0.683115,
          -0.650208,
          0.259853,
          -0.509243,
          0.958185,
          0.089546,
          0.739799,
          0.114385,
          -0.378872,
          -0.168716,
          0.302124,
          0.850416
        ],
        shape: [8, 3]
      },
      weights: [
        {
          data: [
            0.861113,
            -0.237594,
            0.330694,
            0.998309,
            0.786447,
            0.538158,
            -0.228315,
            0.217332,
            -0.475436,
            -0.018066,
            -0.489741,
            -0.522387,
            0.79989,
            0.27058,
            -0.683115,
            -0.650208,
            0.259853,
            -0.509243,
            0.958185,
            0.089546,
            0.739799,
            0.114385,
            -0.378872,
            -0.168716,
            0.302124,
            0.850416,
            -0.984343,
            0.839927,
            -0.895196,
            0.303711,
            0.128826,
            0.058159,
            0.254989,
            -0.759101,
            0.793844,
            0.647309,
            0.252074,
            0.075576,
            -0.859305,
            0.952613,
            -0.053285,
            -0.677361
          ],
          shape: [2, 3, 7, 1]
        },
        { data: [0.861113, -0.237594], shape: [2] }
      ],
      expected: {
        data: [
          0.854959,
          0.355561,
          0.888899,
          -0.9834,
          -0.825345,
          0.941694,
          -0.490434,
          -0.699848,
          0.872523,
          -0.887886,
          -0.408331,
          -0.018902,
          0.959544,
          0.66633,
          -0.779488,
          0.038157
        ],
        shape: [8, 2]
      }
    },
    'convolutional.Convolution1D.0': {
      input: {
        data: [0.528281, -0.994279, -0.285153, 0.81939, -0.087838, 0.963605, 0.734714, 0.972055, 0.846533, -0.392613],
        shape: [5, 2]
      },
      weights: [
        {
          data: [
            0.895265,
            -0.546905,
            0.18884,
            -0.143383,
            0.528281,
            -0.994279,
            -0.285153,
            0.81939,
            -0.087838,
            0.963605,
            0.734714,
            0.972055,
            0.846533,
            -0.392613,
            0.692207,
            -0.757556,
            0.571153,
            -0.49899,
            -0.807941,
            0.886982,
            0.6521,
            0.03665,
            0.747001,
            0.156751
          ],
          shape: [3, 1, 2, 4]
        },
        { data: [0.895265, -0.546905, 0.18884, -0.143383], shape: [4] }
      ],
      expected: {
        data: [
          2.139843,
          -0.364566,
          1.720586,
          -1.858613,
          2.949797,
          -1.99961,
          0.63634,
          0.557583,
          2.311499,
          -1.567427,
          0.132915,
          1.325894
        ],
        shape: [3, 4]
      }
    },
    'convolutional.Convolution1D.1': {
      input: {
        data: [
          0.57107,
          0.361384,
          -0.924121,
          -0.417132,
          -0.39254,
          0.967698,
          -0.674584,
          0.924125,
          0.403362,
          0.417301,
          0.795356,
          -0.367641,
          -0.398474,
          0.889135,
          -0.81216,
          0.383587,
          0.922044,
          0.427167
        ],
        shape: [6, 3]
      },
      weights: [
        {
          data: [
            -0.772191,
            0.495762,
            0.222119,
            0.619384,
            0.425715,
            -0.719926,
            -0.464976,
            -0.704791,
            -0.543864,
            -0.528877,
            0.380048,
            -0.703304,
            -0.108788,
            0.401685,
            -0.806723,
            0.765265,
            0.739665,
            0.689188,
            -0.452596,
            0.571359,
            0.402272,
            -0.010539,
            0.672675,
            -0.191632,
            -0.653554,
            -0.269196,
            0.994178,
            -0.318691,
            0.010759,
            0.078695,
            -0.501326,
            0.625487,
            -0.614715,
            -0.839499,
            -0.811676,
            -0.300069
          ],
          shape: [3, 1, 3, 4]
        },
        { data: [0.895265, -0.546905, 0.18884, -0.143383], shape: [4] }
      ],
      expected: {
        data: [
          0.562644,
          -0.0209,
          -0.688625,
          0.691985,
          0.509712,
          0.184573,
          1.169463,
          -0.253006,
          1.859194,
          0.365631,
          -1.552851,
          0.418241,
          0.087247,
          -0.099305,
          -1.471745,
          0.641488
        ],
        shape: [4, 4]
      }
    },
    'convolutional.Convolution1D.2': {
      input: {
        data: [
          0.18884,
          -0.143383,
          0.528281,
          -0.994279,
          -0.285153,
          0.81939,
          -0.087838,
          0.963605,
          0.734714,
          0.972055,
          0.846533,
          -0.392613,
          0.692207,
          -0.757556,
          0.571153,
          -0.49899,
          -0.807941,
          0.886982,
          0.6521,
          0.03665,
          0.747001,
          0.156751,
          -0.099831,
          0.360314
        ],
        shape: [4, 6]
      },
      weights: [
        {
          data: [
            0.895265,
            -0.546905,
            0.18884,
            -0.143383,
            0.528281,
            -0.994279,
            -0.285153,
            0.81939,
            -0.087838,
            0.963605,
            0.734714,
            0.972055,
            0.846533,
            -0.392613,
            0.692207,
            -0.757556,
            0.571153,
            -0.49899,
            -0.807941,
            0.886982,
            0.6521,
            0.03665,
            0.747001,
            0.156751,
            -0.099831,
            0.360314,
            -0.161149,
            0.280787,
            0.217313,
            -0.789132,
            0.932089,
            0.517401,
            0.359284,
            -0.341304,
            -0.94709,
            0.607321
          ],
          shape: [3, 1, 6, 2]
        },
        { data: [0.895265, -0.546905], shape: [2] }
      ],
      expected: { data: [0.784865, 0.177109, 0.973917, 0.102052], shape: [2, 2] }
    },
    'convolutional.Convolution1D.3': {
      input: {
        data: [
          0.330694,
          0.998309,
          0.786447,
          0.538158,
          -0.228315,
          0.217332,
          -0.475436,
          -0.018066,
          -0.489741,
          -0.522387,
          0.79989,
          0.27058,
          -0.683115,
          -0.650208,
          0.259853,
          -0.509243,
          0.958185,
          0.089546,
          0.739799,
          0.114385,
          -0.378872,
          -0.168716,
          0.302124,
          0.850416
        ],
        shape: [8, 3]
      },
      weights: [
        {
          data: [
            0.861113,
            -0.237594,
            0.330694,
            0.998309,
            0.786447,
            0.538158,
            -0.228315,
            0.217332,
            -0.475436,
            -0.018066,
            -0.489741,
            -0.522387,
            0.79989,
            0.27058,
            -0.683115,
            -0.650208,
            0.259853,
            -0.509243,
            0.958185,
            0.089546,
            0.739799,
            0.114385,
            -0.378872,
            -0.168716,
            0.302124,
            0.850416,
            -0.984343,
            0.839927,
            -0.895196,
            0.303711,
            0.128826,
            0.058159,
            0.254989,
            -0.759101,
            0.793844,
            0.647309,
            0.252074,
            0.075576,
            -0.859305,
            0.952613,
            -0.053285,
            -0.677361
          ],
          shape: [7, 1, 3, 2]
        },
        { data: [0.861113, -0.237594], shape: [2] }
      ],
      expected: {
        data: [
          0.480213,
          0.303795,
          0.960253,
          -0.995868,
          -0.956755,
          0.879206,
          0.96585,
          -0.082645,
          -0.967523,
          -0.903933,
          0.761503,
          0.380303,
          0.015185,
          0.257678,
          0.03388,
          -0.51139
        ],
        shape: [8, 2]
      }
    }
  };

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA);
})();
