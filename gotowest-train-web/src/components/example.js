const parts = [];
      for (let i = 0; i < kpt.length; i++) {
        const part = {
          id: i,
          label: bodyParts[i],
          score: kpt[i][2],
          xRaw: kpt[i][0],
          yRaw: kpt[i][1],
          x: Math.trunc(kpt[i][1] * img.inputShape[1]),
          y: Math.trunc(kpt[i][0] * img.inputShape[0]),
        };
        parts.push(part);
      }
      return parts;