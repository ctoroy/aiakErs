package aia.ers.application.web;

import com.nexacro.uiadapter.boot.core.NexacroException;
import com.nexacro.uiadapter.boot.core.data.NexacroResult;
import aia.ers.application.pojo.departDto;
import aia.ers.application.pojo.employeeDto;
import aia.ers.application.service.OrganizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class CommonController {

    @Autowired(required=true)
    private OrganizeService organizeService;

    @RequestMapping(value = "/select_depart.do")
    public NexacroResult select_depart() throws NexacroException {

        List<departDto> sampleList = organizeService.select_depart();
        NexacroResult result = new NexacroResult();
        result.addDataSet("DEPART_LIST", sampleList);

        return result;
    }

    @RequestMapping(value = "/select_employee.do")
    public NexacroResult select_employee() throws NexacroException {

        List<employeeDto> sampleList = organizeService.select_employee();
        NexacroResult result = new NexacroResult();
        result.addDataSet("EMPLOYEE_LIST", sampleList);

        return result;
    }

}
