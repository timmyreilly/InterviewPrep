# coding: utf-8

"""
    Azure Blockchain Workbench REST API

    The Azure Blockchain Workbench REST API is a Workbench extensibility point, which allows developers to create and manage blockchain applications, manage users and organizations within a consortium, integrate blockchain applications into services and platforms, perform transactions on a blockchain, and retrieve transactional and contract data from a blockchain.  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class ContractCode(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'contract_code_id': 'int',
        'ledger_id': 'int',
        'created_by_user_id': 'int',
        'created_dt_tm': 'datetime'
    }

    attribute_map = {
        'contract_code_id': 'contractCodeID',
        'ledger_id': 'ledgerID',
        'created_by_user_id': 'createdByUserId',
        'created_dt_tm': 'createdDtTm'
    }

    def __init__(self, contract_code_id=None, ledger_id=None, created_by_user_id=None, created_dt_tm=None):  # noqa: E501
        """ContractCode - a model defined in Swagger"""  # noqa: E501

        self._contract_code_id = None
        self._ledger_id = None
        self._created_by_user_id = None
        self._created_dt_tm = None
        self.discriminator = None

        if contract_code_id is not None:
            self.contract_code_id = contract_code_id
        if ledger_id is not None:
            self.ledger_id = ledger_id
        if created_by_user_id is not None:
            self.created_by_user_id = created_by_user_id
        if created_dt_tm is not None:
            self.created_dt_tm = created_dt_tm

    @property
    def contract_code_id(self):
        """Gets the contract_code_id of this ContractCode.  # noqa: E501


        :return: The contract_code_id of this ContractCode.  # noqa: E501
        :rtype: int
        """
        return self._contract_code_id

    @contract_code_id.setter
    def contract_code_id(self, contract_code_id):
        """Sets the contract_code_id of this ContractCode.


        :param contract_code_id: The contract_code_id of this ContractCode.  # noqa: E501
        :type: int
        """

        self._contract_code_id = contract_code_id

    @property
    def ledger_id(self):
        """Gets the ledger_id of this ContractCode.  # noqa: E501


        :return: The ledger_id of this ContractCode.  # noqa: E501
        :rtype: int
        """
        return self._ledger_id

    @ledger_id.setter
    def ledger_id(self, ledger_id):
        """Sets the ledger_id of this ContractCode.


        :param ledger_id: The ledger_id of this ContractCode.  # noqa: E501
        :type: int
        """

        self._ledger_id = ledger_id

    @property
    def created_by_user_id(self):
        """Gets the created_by_user_id of this ContractCode.  # noqa: E501


        :return: The created_by_user_id of this ContractCode.  # noqa: E501
        :rtype: int
        """
        return self._created_by_user_id

    @created_by_user_id.setter
    def created_by_user_id(self, created_by_user_id):
        """Sets the created_by_user_id of this ContractCode.


        :param created_by_user_id: The created_by_user_id of this ContractCode.  # noqa: E501
        :type: int
        """

        self._created_by_user_id = created_by_user_id

    @property
    def created_dt_tm(self):
        """Gets the created_dt_tm of this ContractCode.  # noqa: E501


        :return: The created_dt_tm of this ContractCode.  # noqa: E501
        :rtype: datetime
        """
        return self._created_dt_tm

    @created_dt_tm.setter
    def created_dt_tm(self, created_dt_tm):
        """Sets the created_dt_tm of this ContractCode.


        :param created_dt_tm: The created_dt_tm of this ContractCode.  # noqa: E501
        :type: datetime
        """

        self._created_dt_tm = created_dt_tm

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ContractCode):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
