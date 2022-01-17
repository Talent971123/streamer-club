import React, { createContext, useEffect, useState } from "react";
import { StreamPageCtx } from "types/common/club";

export const StreamPageContext = createContext<Partial<StreamPageCtx>>({});